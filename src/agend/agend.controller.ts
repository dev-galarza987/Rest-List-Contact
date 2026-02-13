import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgendService } from './agend.service';
import { CreateAgendDto } from './dto/create-agend.dto';
import { UpdateAgendDto } from './dto/update-agend.dto';

@Controller('agend')
export class AgendController {
  constructor(private readonly agendService: AgendService) {}

  @Post()
  create(@Body() createAgendDto: CreateAgendDto) {
    return this.agendService.create(createAgendDto);
  }

  @Get()
  findAll() {
    return this.agendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgendDto: UpdateAgendDto) {
    return this.agendService.update(+id, updateAgendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendService.remove(+id);
  }
}
