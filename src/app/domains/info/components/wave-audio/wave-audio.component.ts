import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import WaveSurfer from "wavesurfer.js"

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
  @ViewChild('wave') container!:ElementRef
  @Input({required:true}) audioUrl!:string

  ngAfterViewInit(){
    WaveSurfer.create({
      url:this.audioUrl,
      container:this.container.nativeElement
    })
  }
}
