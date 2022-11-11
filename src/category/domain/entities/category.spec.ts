import { omit } from 'lodash';

import { Category } from './category';

describe('Category unit test', () => {
  test('construct of category ', () => {
    let created_at = new Date();

    let category: Category = new Category({
      name: 'Movie',
    });
    let props = omit(category.props, 'created_at');
    expect(props).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true,
    });
    expect(category.created_at).toBeInstanceOf(Date);

    category = new Category({
      name: 'Movie',
      description: 'some description',
      is_active: false,
      created_at,
    });
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'some description',
      is_active: false,
      created_at,
    });

    category = new Category({
      name: 'Movie',
      description: 'other description',
    });
    expect(category.props).toMatchObject({
      name: 'Movie',
      description: 'other description',
    });

    category = new Category({
      name: 'Movie',
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: 'Movie',
      is_active: true,
    });

    category = new Category({
      name: 'Movie',
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: 'Movie',
      created_at,
    });
    expect(category.props).toMatchObject({
      name: 'Movie',
      created_at,
    });
  });
});
