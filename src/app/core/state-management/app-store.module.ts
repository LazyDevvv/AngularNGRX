import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { effects } from './effects/index.effects';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers/index.reducer';
import { StoreModule } from '@ngrx/store';
import { services } from './index.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('entityCache', reducers, {}),
    EffectsModule.forFeature(effects),
  ],
  declarations: [],
  providers: [...services],
  exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
