import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[new Recipe('Test Recipe','Chicken Soup','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-009-1543877224.jpg?crop=1xw:1xh;center,top&resize=768:*')];

  constructor() { }

  ngOnInit(): void {
  }

}
