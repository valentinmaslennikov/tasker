import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class TaskDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    public title: string;
    @Field() 
    @IsString()
    @IsNotEmpty()
    readonly description: string;
}