import { InputType, Field } from 'type-graphql';

@InputType()
export class TaskInput {
    @Field()
    readonly title: string;
    @Field()
    readonly description: string;
}