import { Injectable } from '@nestjs/common';

export interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
}
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTasks(){
        return this.tasks
    }

    createTask( task: Task){
        console.log(task);
        this.tasks.push(task);
        return task;
    }

}
