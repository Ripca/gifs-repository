import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServices } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="true"
      class="form-control"
      placeholder="Buscar gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  // searchTag(newTag: string) {
  //   console.log({ newTag });
  // }

  constructor(private gifsService: GifsServices) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    // console.log({ newTag });
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
