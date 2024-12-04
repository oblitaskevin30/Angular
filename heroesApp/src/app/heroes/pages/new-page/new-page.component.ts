import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent {

  public heroForm : FormGroup= new FormGroup({

    id:               new FormControl('',[Validators.minLength(3)]),
    superhero:     new FormControl(''),
    publisher:        new FormControl(''),
    alter_ego:     new FormControl(''),
    first_appearancnew  : new FormControl(''),
    characters:    new FormControl(''),
    alt_img:      new FormControl('')

  });

  public onSave():void{
    console.log(this.heroForm.value);
  }

  public onClear(): void {
    this.heroForm.reset();
  }


}
