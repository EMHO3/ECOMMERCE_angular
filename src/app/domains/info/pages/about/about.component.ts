import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms'
import { HighlightDirective } from '../../../shared/directives/highlight.directive';
import { CounterComponent } from "../../../shared/componentes/counter/counter.component";
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';


@Component({
  selector: 'app-about',
  imports: [CommonModule,FormsModule, CounterComponent,WaveAudioComponent,HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration=signal(1000)
  message=signal("hola about")

  changeDuration(event:Event){
    const input= event.target as HTMLInputElement
    this.duration.set(input.valueAsNumber)
  }

  changeMessge(event:Event){
    const input= event.target as HTMLInputElement
    this.message.set(input.value)
  }
}
