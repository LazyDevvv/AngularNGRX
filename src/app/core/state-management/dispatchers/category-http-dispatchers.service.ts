import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { CategoryService } from '../../services/category.service';
import { EntityState } from '../reducers/index.reducer';
import * as CategoryActions from '../actions/category.actions';
import { Category } from '../../entity/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryHttpDispatchersService {
  private dispatch = (action: Action) => this.store.dispatch(action);
  private dispatchLoading = () => this.dispatch(CategoryActions.setCategoryLoading({ loading: true }));

  constructor(
    private store: Store<EntityState>,
    private categoryService: CategoryService
  ) {}

  getCategories() {
    this.dispatchLoading();
    this.categoryService.getCategories().subscribe(
      (categories) => this.dispatch(CategoryActions.getCategoriesSuccess({ categories })),
      (error) => this.dispatch(CategoryActions.getCategoryError(error))
    );
  }

  addCategory(category: Category) {
    this.dispatchLoading();
    this.categoryService.addCategory(category).subscribe(
      // pessimistic add: add category to cache only when the server responds with success
      (addedCategory) =>
        this.dispatch(CategoryActions.addCategorySuccess({ category: addedCategory })),
      (error) => this.dispatch(CategoryActions.addCategoryError(error))
    );
  }

  deleteCategory(category: Category) {
    this.dispatchLoading();
    // optimistic delete: delete category immediately from cache, before making request
    this.dispatch(CategoryActions.deleteCategory({ category }));
    this.categoryService.deleteCategory(category).subscribe(
      (addedCategory) =>
        this.dispatch(CategoryActions.deleteCategorySuccess({ category: addedCategory })),
      // no recovery: don't bother restoring the category to cache when server responds with error
      (error) => this.dispatch(CategoryActions.deleteCategoryError(error))
    );
  }

  updateCategory(category: Category) {
    this.dispatchLoading();
    this.categoryService.updateCategory(category).subscribe(
      // pessimistic update: update category in cache only when the server responds with success
      (addedCategory) =>
        this.dispatch(CategoryActions.updateCategorySuccess({ category: addedCategory })),
      (error) => this.dispatch(CategoryActions.updateCategoryError(error))
    );
  }
}
