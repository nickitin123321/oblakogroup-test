import { Resolver, Query } from '@nestjs/graphql';
import { Category } from './models/category.model';

@Resolver()
export class CategoriesResolver {
  @Query(() => [Category])
  async categories() {
    return [] as Category[];
  }
}
