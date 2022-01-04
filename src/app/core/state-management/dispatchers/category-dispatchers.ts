import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from '../../entity/category';
import { EntityState } from '../reducers/index.reducer';
import * as CategoryAction from '../actions/category.actions';

@Injectable({
  providedIn: 'root',
})
export class CategoryDispatchers {
  constructor(private store: Store<EntityState>) {}

  deleteCategory(category: Category) {
    this.store.dispatch(CategoryAction.deleteCategory({ category }));
  }

  addCategory(category: Category) {
    this.store.dispatch(CategoryAction.addCategory({ category }));
  }

  updateCategory(category: Category) {
    this.store.dispatch(CategoryAction.updateCategory({ category }));
  }

  getCategories() {
    this.store.dispatch(CategoryAction.getCategories());
  }
}
