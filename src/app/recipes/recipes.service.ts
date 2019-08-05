import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Pizza',
      imageUrl: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ingredients: ['Bread', 'Sausage', 'Tomato', 'Salt', 'Sugar']
    },
    {
      id: 'r2',
      title: 'Chicken Soup',
      imageUrl: 'https://www.halfbakedharvest.com/wp-content/uploads/2018/03/Slow-Cooker-Hearty-Chicken-Soup-1-1-500x375.jpg',
      ingredients: ['Chicken', 'Water', 'Mushroom']
    },
    {
      id: 'r3',
      title: 'Spaghetti',
      imageUrl: 'https://www.365daysofcrockpot.com/wp-content/uploads/2018/04/instant-pot-spaghetti-sauce.jpg',
      ingredients: ['Spaghetti', 'Bolognese Sauce', 'Onion', 'Smoked Beef']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    console.log(recipeId);
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
