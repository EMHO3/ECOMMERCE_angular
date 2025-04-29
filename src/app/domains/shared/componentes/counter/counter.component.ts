import { Component, input, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent { 
  //input signañ
  duration=input.required<number>()
  doubleDuration=signal(0)
  //input normal
  @Input({required:true}) message='';
  counter=signal(0)
  counterRef:number|undefined

  constructor(){
    //no asincrono
    //anter del render
    //una vez
    console.log("constructoe");
    console.log('_'.repeat(10))
    
  }

  ngOnChanges(changes:SimpleChanges){
    //antes y durante el render
    console.log("ngOnChanges");
    console.log('_'.repeat(10));
    console.log(changes);
    const duration=changes["duration"]
    if(duration && duration.currentValue !==duration.previousValue){
      this.doubleDuration.set(this.duration()*2)
      this.doSometing()
    }
    console.log(duration);
  }

  ngOnInit(){
    //despues del render
    //una vez
    //asincrono
    console.log("ngOnInit");
    console.log('_'.repeat(10))
    console.log("duration=>" , this.duration)
    console.log("message=>" , this.message)

    //puede ocacionar fuga de memoria aun con el ngOnDestroy pq no para
      // this.counterRef=window.setInterval(()=>{
      //   console.log("run interval")
      //   this.counter.update(statePrev=>statePrev+1)
      // },1000)
  }

  ngAfterViewInit(){
    //despues del render
    //hijos ya fueron renderizados
    console.log("ngAfterViewInit")
    console.log('_'.repeat(10))
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
    console.log('_'.repeat(10))
    //para destruir el setInterval
    window.clearInterval(this.counterRef)
  }
  doSometing(){
    console.log("logica de negocio")
  }

}
