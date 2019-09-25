import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/interfaces/user.interface';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    private saltRounds = 10;
    private users: User[]

    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async createUser(userDto: UserDto): Promise<User>{
      userDto.password = await this.getHash(userDto.password);
      const user = await this.userModel(userDto);

      return user.save();
    }

    async getUsers(): Promise<User[]> {
      return await this.userModel.find().exec();
    }
    
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async getHash(password: string|undefined): Promise<string> {
      return bcrypt.hash(password, this.saltRounds);
    }
}
