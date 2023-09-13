import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  food:Food[]=[];

}
