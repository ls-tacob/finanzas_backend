import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks: string[] = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10',];

    getAll(){
        return this.tasks;
    }
}
