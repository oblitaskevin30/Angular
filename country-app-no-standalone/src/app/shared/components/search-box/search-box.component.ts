import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit , OnDestroy{


  
  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSubscription? : Subscription;

  @Input()
  public initialValueSearchBox : string = '';
  
  @Input() isLoading? : boolean; 
  
  @Input()
  public placeholder : string = '';

  @Output()
  public onValueDebounce : EventEmitter<string> = new EventEmitter<string>(); 
  
  @Output()
  public onValue : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {

    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      
      this.onValueDebounce.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value : string) : void {
    this.onValue.emit(value)
  }



  onKeyUp(searchTerm : string){
    this.debouncer.next(searchTerm)
  }

}



