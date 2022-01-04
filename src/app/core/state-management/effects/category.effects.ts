import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { CategoryService } from '../../services/category.service';
import * as CategoryActions from '../actions/category.actions';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private categoryDataService: CategoryService
  ) {}

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategories),
      switchMap(() =>
        this.categoryDataService.getCategories().pipe(
          map((categories) =>
            CategoryActions.getCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(CategoryActions.getCategoryesError({ error }))
          )
        )
      )
    )
  );

  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.addCategory),
      concatMap((action) =>
        this.categoryDataService.addCategory(action.category).pipe(
          map((category) => CategoryActions.addCategorySuccess({ category })),
          catchError((error) => of(CategoryActions.addCategoryError({ error })))
        )
      )
    )
  );

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.deleteCategory),
      concatMap((action) =>
        this.categoryDataService.deleteCategory(action.category).pipe(
          map((category) =>
            CategoryActions.deleteCategorySuccess({ category })
          ),
          catchError((error) =>
            of(CategoryActions.deleteCategoryError({ error }))
          )
        )
      )
    )
  );

  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.updateCategory),
      concatMap((action) =>
        this.categoryDataService.updateCategory(action.category).pipe(
          map((category) =>
            CategoryActions.updateCategorySuccess({ category })
          ),
          catchError((error) =>
            of(CategoryActions.updateCategoryError({ error }))
          )
        )
      )
    )
  );
}
