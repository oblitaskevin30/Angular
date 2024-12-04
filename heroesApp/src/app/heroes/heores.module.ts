import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeoresRoutingModule } from './heores-routing.module';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { HeoreImgPipe } from '../pipe/heore-img.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPagesComponent,
    NewPageComponent,
    SearchPageComponent,
    ListPageComponent,
    HeroPageComponent,
    HeoreImgPipe
  ],
  imports: [
    CommonModule,
    HeoresRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class HeoresModule { }
