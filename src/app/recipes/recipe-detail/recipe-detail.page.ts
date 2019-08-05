import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    const recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');
    this.loadedRecipe = this.recipesService.getRecipe(recipeId);
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
    // this.alertCtrl.create({
    //   header: 'Delete Recipe',
    //   message: 'Are you sure you want to delete this item?',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel'
    //     },
    //     {
    //       text: 'Delete',
    //       handler: () => {
    //         this.recipesService.deleteRecipe(this.loadedRecipe.id);
    //         this.router.navigate(['/recipes']);
    //       }
    //     }
    //   ]
    // }).then(el => {
    //   el.present();
    // });
  }
}
