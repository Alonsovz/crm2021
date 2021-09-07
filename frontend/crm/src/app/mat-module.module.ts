import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
const matmodules = [
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSelectModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    matmodules
  ]
})
export class MatModuleModule { }
