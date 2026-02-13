import { Injectable } from '@nestjs/common';
import { CreateAgendDto } from './dto/create-agend.dto';
import { UpdateAgendDto } from './dto/update-agend.dto';

@Injectable()
export class AgendService {
  create(createAgendDto: CreateAgendDto) {
    return 'This action adds a new agend';
  }

  findAll() {
    return `This action returns all agend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agend`;
  }

  update(id: number, updateAgendDto: UpdateAgendDto) {
    return `This action updates a #${id} agend`;
  }

  remove(id: number) {
    return `This action removes a #${id} agend`;
  }
}
