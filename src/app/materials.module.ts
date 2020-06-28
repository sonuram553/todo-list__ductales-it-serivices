import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialModules = [MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: MaterialModules,
  exports: MaterialModules,
})
export class MaterialsModule {}
