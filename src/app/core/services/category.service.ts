import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { Category } from '../entity/category';
import { DataServiceError } from '../utils/data-service-error';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  api = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  addCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(`${this.api}/categories/`, category)
      .pipe(catchError(this.handleError(category)));
  }

  deleteCategory(category: Category): Observable<Category> {
    return this.http.delete(`${this.api}/categories/${category.id}`).pipe(
      map(() => category), // return the deleted category
      catchError(this.handleError(category))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Array<Category>>(`${this.api}/categories`)
      .pipe(catchError(this.handleError()));
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http
      .put<Category>(`${this.api}/categories/${category.id}`, category)
      .pipe(
        map(() => category), // return the updated category
        catchError(this.handleError(category))
      );
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);
      return throwError(error);
    };
  }
}
