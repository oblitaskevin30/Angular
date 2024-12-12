import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../heroes/interfaces/hero.interface';

@Pipe({
  name: 'heoreImg'
})
export class HeoreImgPipe implements PipeTransform {

  transform(hero: Hero): string {
    
    

    if(!hero.id && !hero.alt_img ){

      return 'assets/no-image.png';

    }else if(hero.alt_img?.length == 0){return 'assets/no-image.png';}
    else if (hero.alt_img){
      return hero.alt_img;
    }

    console.log(hero.alt_img);

    return `/assets/heroesImg/${hero.id}.jpg`;
  }

}
