import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category/category.component';
import { MaterialModule } from 'src/app/core/utils/material.module';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
  ],
  imports: [CommonModule, CategoryRoutingModule, MaterialModule],
  exports: [CategoryComponent, CategoryDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoryModule {}
