import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SidebarRoutingModule } from './sidebar-routing.module';

import { SharedModule } from '../shared/shared.module';

import { NavegacaoBarModule } from '../navegacao-bar/navegacao-bar.module';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    // SidebarRoutingModule,
    RouterModule,
    SharedModule,
    NavegacaoBarModule,
  ],exports:[SidebarComponent]
})
export class SidebarModule { }
