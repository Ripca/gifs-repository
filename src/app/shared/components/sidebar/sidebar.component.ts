import { Component } from '@angular/core';
import { GifsServices } from '../../../gifs/services/gifs.service';
import { Gif } from '../../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrl: 'sidebar.component.css',
})
export class SidebarComponent {
  constructor(private GifsServicio: GifsServices) {}

  tags() {
    return this.GifsServicio.tagsHistory;
  }

  searchTag(tag: string): void {
    this.GifsServicio.searchTag(tag);
  }
}
