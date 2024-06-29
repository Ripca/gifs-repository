import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponentComponent } from './HomePageComponent/HomePageComponent.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    HomePageComponentComponent,
    SearchBoxComponent,
    CardListComponent,
  ],
  imports: [CommonModule],
  exports: [HomePageComponentComponent, SearchBoxComponent, CardListComponent],
})
export class GifsModule {}
