import { Component, input, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table-component',
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {



  @Input()
  public countries : Country[] = [];


}
