import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{

  public message : string = "Are you sure wanna deletes this hero ? this is no reversible";
  public heroIdSelected : string = "";
  public heroes : Hero[] = [];
  
  constructor(private heroService : HeroService,
    private router : Router
  ){

  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  public confirmDelete(id : string) : void{
    this.heroIdSelected = id;
    console.log(this.heroIdSelected)
  }


  public onDelete() : void {
    
    if(!this.heroIdSelected){throw Error("hero id is required")}
    this.heroService.deleteHero(this.heroIdSelected).subscribe(
      (heroDeleted)=>{
        if(heroDeleted) this.router.navigate(['/heroes']);
        console.log(this.heroIdSelected)
        this.ngOnInit()
      }
    )
  }

  
}
