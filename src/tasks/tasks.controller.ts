import {Body, Controller, Get, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Get('/')
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Post('/')
    createTask(@Body() task: any){
        return this.tasksService.createTask(task);
    }


}
