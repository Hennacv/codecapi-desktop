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
    console.log(createAnswerDto);

    let answer = this.repo.create({...createAnswerDto, userId: user.id });
    await answer.save();
    return this.fetchAnswer(answer.id);
  }

  findAll() {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }

  async fetchAnswer(id: number) {
    return await Answer.findOneOrFail({
      where: { id },
      relations: ['user'],
      order: {
        createdAt: 'desc',
        user: {
          id: 'asc',
        }
      },
    });
  }

}
