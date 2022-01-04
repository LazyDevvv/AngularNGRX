export * from './reducers/index.reducer';
export * from './effects/index.effects';
export * from './selectors/index.selectors';
export * from './actions/index.actions';

import { CategoryService } from '../services/category.service';
import { CategoryDispatchers } from './dispatchers/category-dispatchers';
import { CategorySelectors } from './selectors/category.selectors';
import { CategoryHttpDispatchersService } from './dispatchers/category-http-dispatchers.service';

export const services = [
  CategoryService,
  CategoryDispatchers,
  CategoryHttpDispatchersService,
  CategorySelectors,
];
