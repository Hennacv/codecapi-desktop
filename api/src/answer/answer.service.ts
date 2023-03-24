import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from '../db/entities/answer.entity';
import { Question } from '../db/entities/question.entity';
import { User } from '../db/entities/user.entity';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private repo: Repository<Answer>,
  ) {}

  async create(createAnswerDto: CreateAnswerDto, user: User) {
    let answer = this.repo.create({ ...createAnswerDto, userId: user.id });
    await answer.save();
    return this.fetchAnswer(answer.id);
  }

  async findOne(id: number) {
    return await this.fetchAnswer(id);
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    const answer = await this.fetchAnswer(id);
    Object.assign(answer, updateAnswerDto);
    answer.save();
    return answer;
  }

  async remove(id: number) {
    const answer = await Answer.findOneByOrFail({ id });
    await this.repo.remove(answer);
    return `Removed answer #${id}`;
  }

  async fetchAnswer(id: number) {
    return await Answer.findOneOrFail({
      where: { id },
      relations: ['question', 'user'],
      order: {
        createdAt: 'desc',
        user: {
          id: 'asc',
        },
      },
    });
  }
}
