import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Category } from 'src/app/core/entity/category';
import { MasterDetailCommands } from 'src/app/core/utils/master-detail-commands';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  @Input() categories!: Category[];
  @Input() selectedCategory!: Category;
  @Input() commands!: MasterDetailCommands<Category>;

  ngOnInit(): void {}

  byId(hero: Category) {
    return hero.id;
  }

  onSelect(hero: Category) {
    this.commands.select(hero);
  }

  deleteCategory(hero: Category) {
    this.commands.delete(hero);
  }
}
