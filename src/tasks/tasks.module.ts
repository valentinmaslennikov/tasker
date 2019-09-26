import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from 'src/tasks/task.schema';
import { TasksResolver } from './tasks.resolver';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
    ],
    controllers: [TasksController],
    providers: [TasksService, TasksResolver],
    exports: [TasksService]
})
export class TasksModule {}
