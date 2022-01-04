import { ActionReducerMap } from '@ngrx/store';
import * as fromCategories from './category.reducers';

export interface EntityState {
  categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<EntityState> = {
  categories: fromCategories.reducer,
  // here is where i put other reducers, when i have them
};
