import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/tasks/dto/task.dto';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/tasks/interfaces/task.interface';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

    async createTask(taskDto: TaskDto): Promise<Task>{
        return await this.taskModel(taskDto).save();
      }
  
      async getTasks(): Promise<Task[]> {
        return await this.taskModel.find().exec();
      }
}
