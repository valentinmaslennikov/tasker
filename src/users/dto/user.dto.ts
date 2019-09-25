import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class UserDto {
    @Field({ nullable: true })
    @IsString()
    public username: string;
    @Field() 
    @IsString()
    readonly email: string;
    @Field()
    @IsString()
    public password: string;
}