import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit{


  public heroSelected? : Hero 

  constructor(
    private heroService : HeroService,
    private activatedRoute : ActivatedRoute,
    private router:Router

  ){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=>this.heroService.getHeroById(id))
    ).subscribe( hero =>{
      if(!hero){
        return this.router.navigate(['/heroes/list']);
      }
      this.heroSelected = hero;
      console.log(this.heroSelected)
      return ;
      }
    )
  }

  goBack():void{
    this.router.navigate(['/heroes/list'])
  }

}
