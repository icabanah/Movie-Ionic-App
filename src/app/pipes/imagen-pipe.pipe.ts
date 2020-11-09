import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

const URL = environment.imgPath;

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipePipe implements PipeTransform {

  transform(img: string, width: string = 'w500'): string {
    if(!img){
      return './assets/no-image-banner.jpg';
    }
    const urlImg = `${URL}/${width}${img}`;
    return urlImg;
  }

}
