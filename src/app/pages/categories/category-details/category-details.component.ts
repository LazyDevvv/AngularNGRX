import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/core/entity/category';
import { MasterDetailCommands } from 'src/app/core/utils/master-detail-commands';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit, OnChanges {
  @Input() category!: Category;
  @Input() commands!: MasterDetailCommands<Category>;

  @ViewChild('name', { static: true }) nameElement!: ElementRef;

  addMode = false;
  form = this.fb.group({
    id: [],
    name: ['', Validators.required],
    description: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.category && this.category.id) {
      this.form.patchValue(this.category);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  close() {
    this.commands.close();
  }

  saveCategory() {
    const { dirty, valid, value } = this.form;
    if (dirty && valid) {
      const newCategory = { ...this.category, ...value };
      this.addMode
        ? this.commands.add(newCategory)
        : this.commands.update(newCategory);
    }
    this.close();
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }
}
