import { Component } from '@angular/core';
import { GifsServices } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: 'HomePageComponent.html',
  styleUrl: 'HomePageComponent.component.css',
})
export class HomePageComponentComponent {
  constructor(private gifsService: GifsServices) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
