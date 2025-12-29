import { Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
// interface Todo {
//   id: number;
//   text: string;
// }
// either that way or in front of the TodoArray
@Injectable()
export class TodoService {
  private TodoArray: { id: number; text: string }[] = [];

  getAllArray() {
    return this.TodoArray;
  }

  create(getDto: TodoDto) {
    const newTodo = { id: Date.now(), text: getDto.text };
    this.TodoArray.push(newTodo);
    return newTodo;
  }

  update(id: number, text: string) {
    const todo = this.TodoArray.find((item) => item.id === id);
    if (todo) todo.text = text;
    return todo;
  }
  remove(id: number): void {
    this.TodoArray = this.TodoArray.filter((item) => item.id !== id);
  }
}
