import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto'
import { UserInput } from './users.input'

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserDto])
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserInput) {
    return this.usersService.createUser(input);
  }
}