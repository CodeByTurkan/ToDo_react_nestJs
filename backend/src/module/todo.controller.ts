import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll() {
    return this.todoService.getAllArray();
  }

  @Post('add')
  create(@Body() getData: TodoDto) {
    return this.todoService.create(getData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('text') text: string) {
    return this.todoService.update(Number(id), text);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(Number(id));
  }
}
