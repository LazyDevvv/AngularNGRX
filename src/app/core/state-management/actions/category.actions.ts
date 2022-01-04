import { createAction, props } from '@ngrx/store';
import { Category } from '../../entity/category';
import { DataServiceError } from '../../utils/data-service-error';

export const createCategoryAction = (actionType: string) =>
  createAction(actionType, props<{ category: Category }>());

export const createCategoryErrorAction = (actionType: string) =>
  createAction(actionType, props<{ error: DataServiceError<Category> }>());

export const getCategories = createAction('[Category] GET_CATEGORYES');

export const getCategoriesSuccess = createAction(
  '[Category] GET_CATEGORIES_SUCCESS',
  props<{ categories: Category[] }>()
);

export const getCategoryesError = createAction(
  '[Category] GET_CATEGORIES_ERROR',
  props<{ error: any }>()
);

export const addCategory = createCategoryAction('[Category] ADD_CATEGORY');

export const addCategorySuccess = createCategoryAction('[Category] ADD_CATEGORY_SUCCESS');

export const addCategoryError = createCategoryErrorAction('[Category] ADD_CATEGORY_ERROR');

export const getCategory = createAction('[Category] GET_CATEGORY', props<{ id: string }>());

export const getCategorySuccess = createCategoryAction('[Category] GET_CATEGORY_SUCCESS');

export const getCategoryError = createCategoryErrorAction('[Category] GET_CATEGORY_ERROR');

export const updateCategory = createCategoryAction('[Category] UPDATE_CATEGORY');

export const updateCategorySuccess = createCategoryAction('[Category] UPDATE_CATEGORY_SUCCESS');

export const updateCategoryError = createCategoryErrorAction(
  '[Category] UPDATE_CATEGORY_ERROR'
);

export const deleteCategory = createCategoryAction('[Category] DELETE_CATEGORY');

export const deleteCategorySuccess = createCategoryAction('[Category] DELETE_CATEGORY_SUCCESS');

export const deleteCategoryError = createCategoryErrorAction(
  '[Category] DELETE_CATEGORY_ERROR'
);

export const setCategoryLoading = createAction(
  '[Category] SET_CATEGORY_LOADING',
  props<{ loading: boolean }>()
);
