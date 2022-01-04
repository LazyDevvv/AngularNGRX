import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/entity/category';
import { CategoryDispatchers } from 'src/app/core/state-management/dispatchers/category-dispatchers';
import { CategorySelectors } from 'src/app/core/state-management/selectors/category.selectors';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  selected!: Category | null;
  commands = this;

  categories$: Observable<Category[]>;
  loading$: Observable<boolean>;

  constructor(
    private heroDispatchers: CategoryDispatchers,
    private heroSelectors: CategorySelectors
  ) {
    this.categories$ = this.heroSelectors.categories$;
    this.loading$ = this.heroSelectors.loading$;
  }

  ngOnInit() {
    this.getCategories();
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCategories() {
    this.close();
    this.heroDispatchers.getCategories();
  }

  add(hero: Category) {
    this.heroDispatchers.addCategory(hero);
  }

  delete(hero: Category) {
    this.close();
    this.heroDispatchers.deleteCategory(hero);
  }

  update(hero: Category) {
    this.heroDispatchers.updateCategory(hero);
  }

  select(hero: Category) {
    this.selected = hero;
  }

  unselect() {
    this.selected = null;
  }
}
