import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit{

  public message : string  = "";
  public tittleForm : string = "Created Form";


  public heroForm : FormGroup= new FormGroup({

    id:               new FormControl<string>(''),
    superhero:     new FormControl(''),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:     new FormControl(''),
    first_appearance  : new FormControl(''),
    characters:    new FormControl(''),
    alt_img:      new FormControl('')

  });

  public constructor(
    private heroService : HeroService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ){

  }
  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return ;
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroService.getHeroById(id))
    ).subscribe((hero)=>{
      
      if(!hero)return this.router.navigateByUrl('/');
      this.heroForm.reset(hero)
      this.tittleForm = `Edit this hero : ${hero.superhero}`
      console.log(this.heroForm.value, "mierda")
      return ;
    })
  }

  public get currentHero ( ) : Hero{
    const hero : Hero = this.heroForm.value;
    return hero
  }

  public onSave():void{
    if(this.heroForm.invalid){console.log("invalid")} ;

    if(this.currentHero.id){
      this.message = `${this.currentHero.superhero} updated!`
      this.heroService.updateHero(this.currentHero)
      .subscribe(
        hero => {
          console.log(hero)
        }
      )
    }else{
      this.currentHero.id = crypto.randomUUID()
      this.message = `${this.currentHero.superhero} Created!` 
      this.heroService.addHero(this.currentHero)
      .subscribe(hero =>{
        console.log(hero)
      })
    }
  }

  public onClear(): void {
    this.heroForm.reset();
  }

  public onDelete(){
    this.message = "Are you sure wanna deletes this hero ? this is no reversible"
    if(!this.currentHero.id){throw Error("hero id is required")}
    this.heroService.deleteHero(this.currentHero.id).subscribe(
      (heroDeleted)=>{
        if(heroDeleted) this.router.navigate(['/heroes']);
      }
    )
  }


}
