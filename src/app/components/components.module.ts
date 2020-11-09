import { SlideshowParesComponent } from "./slideshow-pares/slideshow-pares.component";
import { SlideshowPosterComponent } from "./slideshow-poster/slideshow-poster.component";
import { SlideshowBackdropComponent } from "./slideshow-backdrop/slideshow-backdrop.component";
import { PipesModule } from "./../pipes/pipes.module";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
  ],
})
export class ComponentsModule {}
