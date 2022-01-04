import { Action, createReducer, on } from "@ngrx/store";
import { Category } from "../../entity/category";
import * as CategoryActions from '../actions/category.actions';

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: boolean;
}

export const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: false,
};

function modifyCategoryState(
  categoryState: CategoryState,
  categoryChanges: Partial<Category>
): CategoryState {
  return {
    ...categoryState,
    loading: false,
    categories: categoryState.categories.map(c => {
      if (c.id === categoryChanges.id) {
        return { ...c, ...categoryChanges };
      } else {
        return c;
      }
    }),
  };
}

const categoryReducer = createReducer(
  initialState,

  /// Add Category
  on(CategoryActions.addCategory, (state) => ({ ...state, loading: true })),
  on(CategoryActions.addCategorySuccess, (state, { category }) => ({
    ...state,
    loading: false,
    categories: [...state.categories, category],
  })),
  on(CategoryActions.addCategoryError, (state) => ({
    ...state,
    loading: false,
  })),

  /// Get Category
  on(CategoryActions.getCategories, (state) => ({ ...state, loading: true })),
  on(CategoryActions.getCategoryError, (state) => ({
    ...state,
    loading: false,
  })),
  on(CategoryActions.getCategoriesSuccess, (state, { categories }) => ({
    ...state,
    loading: false,
    categories,
  })),

  on(CategoryActions.deleteCategory, (state, { category }) => ({
    ...state,
    loading: false,
    categories: state.categories.filter((h) => h !== category),
  })),
  on(CategoryActions.deleteCategorySuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(CategoryActions.deleteCategoryError, (state, { error }) => ({
    ...state,
    categories: [...state.categories, error.requestData],
    loading: false,
  })),

  on(CategoryActions.updateCategory, (state, { category }) =>
    modifyCategoryState(state, category)
  ),
  on(CategoryActions.updateCategoryError, (state, { error }) => ({
    ...state,
    categories: state.categories.map((c) => {
      if (c.id === error.requestData.id) {
        // Huh? No idea what the error is!
        state.error = true;
      }
      return c;
    }),
    loading: false,
  })),
  on(CategoryActions.setCategoryLoading, (state, { loading }) => ({
    ...state,
    loading: loading == null ? true : loading,
  }))
);


export function reducer(state: CategoryState | undefined, action: Action) {
  return categoryReducer(state, action);
}
