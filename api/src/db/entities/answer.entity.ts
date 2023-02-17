import { Column, Entity, ManyToOne } from "typeorm";
import { CustomBaseEntity } from "./custom-base-entity";
import { User } from './user.entity';
import { Question } from './question.entity';

@Entity()
export class Answer extends CustomBaseEntity{
  // user_id is nullable because when a user gets deleted, we don't want
  // to delete all of the answers associated with the user
  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.questions, { onDelete: 'SET NULL' })
  user: User;

  // question_id is not nullable because when a question gets deleted, we want
  // to delete all of the answers associated with the question
  @Column({ name: 'question_id', nullable: false })
  questionId: number;

  @ManyToOne(() => Question, (question) => question.answer, { onDelete: 'CASCADE' })
  question: Question;

  @Column()
  text: string;
}