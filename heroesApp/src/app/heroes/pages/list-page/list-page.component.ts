import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{

  public heroes : Hero[] = [];
  
  constructor(private heroService : HeroService){

  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  
}
