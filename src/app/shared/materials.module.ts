import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const MaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [],
  imports: MaterialModules,
  exports: MaterialModules,
})
export class MaterialsModule {}
