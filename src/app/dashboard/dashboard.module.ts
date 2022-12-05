import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialsImportsModule } from '../shared/pages/materials-imports/materials-imports.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialsImportsModule
    
  ]
})
export class DashboardModule { }
