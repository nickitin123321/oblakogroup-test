import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Category {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;
}
