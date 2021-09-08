import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCard, MatCardModule} from '@angular/material/card';



const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})

export class MaterialModule { }
