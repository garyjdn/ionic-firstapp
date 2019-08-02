import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-datail',
  templateUrl: './recipe-datail.page.html',
  styleUrls: ['./recipe-datail.page.scss'],
})
export class RecipeDatailPage implements OnInit {
  recipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   // middleware
    //   if (!paramMap.has('rid')) {
    //     return ;
    //   }
    //   const id: string = paramMap.get('rid');
    //   this.recipe = this.recipesService.getRecipe(id);
    // });
  }

}
