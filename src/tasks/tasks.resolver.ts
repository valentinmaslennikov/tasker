import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto'
import { TaskInput } from './tasks.input'

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [TaskDto])
  async getTasks() {
    return this.tasksService.getTasks();
  }

  @Mutation(() => TaskDto)
  async createTask(@Args('input') input: TaskInput) {
    return this.tasksService.createTask(input);
  }
}