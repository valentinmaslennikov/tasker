import { Controller, Get, Req, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { TaskDto } from 'src/tasks/dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('users')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Post('/task')
    async createUser(@Res() res, @Body() taskDto: TaskDto) {
        const task = await this.tasksService.createTask(taskDto);
        return res.code(HttpStatus.OK).send({
            message: "Task created",
            post: task
        })
    }

    @Get('/getTasks')
    async getUsers(@Res() res){
        const tasks = await this.tasksService.getTasks();
        return res.code(HttpStatus.OK).send(tasks);
    }
}
