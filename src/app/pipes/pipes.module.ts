import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipePipe } from './imagen-pipe.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [ImagenPipePipe, ParesPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImagenPipePipe,
    ParesPipe
  ]
})
export class PipesModule { }
