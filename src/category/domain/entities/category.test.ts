import { Category } from './category';

describe('Category unit test', () => {
  test('construct of category ', () => {
    const category: Category = new Category('Movie');
    expect(category.name).toBe('Movie');
  });
});
