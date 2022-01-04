import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';

import { CategoryState } from '../reducers/category.reducers';
import { EntityState } from '../reducers/index.reducer';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getCategoryState = createSelector(
  getEntityState,
  (state: EntityState) => state.categories
);

const getAllCategoryes = createSelector(
  getCategoryState,
  (state: CategoryState) => state.categories
);

const getCategoryesLoading = createSelector(
  getCategoryState,
  (state: CategoryState) => state.loading
);

@Injectable()
export class CategorySelectors {
  constructor(private store: Store<EntityState>) {}
  // selectors$
  categories$ = this.store.select(getAllCategoryes);
  categoryState$ = this.store.select(getCategoryState);
  loading$ = this.store.select(getCategoryesLoading);
}
