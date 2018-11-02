import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Third-party module
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { MealsService } from './services/meals/meals.service';

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  exports: [],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService]
    };
  }
}