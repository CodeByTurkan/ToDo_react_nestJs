import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll() {
    return this.todoService.getAllArray();
  }

  @Post('submit')
  submitForm(@Body() getData: TodoDto) {
    return this.todoService.submitForm(getData);
  }
}
