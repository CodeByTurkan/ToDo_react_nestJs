import { Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  //   constructor(private readonly) {}
  private TodoArray: TodoDto[] = [];

  submitForm(getDto: TodoDto) {
    this.TodoArray.push(getDto);
    console.log('received dto from frotnend', getDto);
    return { message: `hello ${getDto.name} data was submitted` };
  }

  getAllArray() {
    return this.TodoArray;
  }
}
