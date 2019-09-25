import { Controller, Get, Req, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('/user')
    async createUser(@Res() res, @Body() userDto: UserDto) {
        const user = await this.usersService.createUser(userDto);
        return res.code(HttpStatus.OK).send({
            message: "User created",
            post: user
        })
    }

    @Get('/getUsers')
    async getUsers(@Res() res){
        const posts = await this.usersService.getUsers();
        return res.code(HttpStatus.OK).send(posts);
    }
}
