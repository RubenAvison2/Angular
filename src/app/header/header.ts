import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, AfterContentInit, OnDestroy, AfterViewInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked {


  constructor() {
    console.log("constructor ejecutado");
  }
  onDataCheck(e:any){ 
    console.log(e);
  }
  ngDoCheck():void{
    console.log("ngDoCheck ejectuado");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges ejecutado");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked ejecutado");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked ejecutado");
  }
  ngAfterContentInit(): void {
   console.log("ngAfterContentInit ejecutado");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy ejecutado");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit ejecutado");
  }
  ngOnInit(): void {
    console.log ("ngOnInit ejecutado");
  }

}
