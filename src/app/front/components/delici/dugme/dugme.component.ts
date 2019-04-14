import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dugme',
  templateUrl: './dugme.component.html',
  styleUrls: ['./dugme.component.css']
})
export class DugmeComponent implements OnInit {

  constructor() { }

  @Input() pera : string;
  @Output() outputMetoda = new EventEmitter<string>();

  ngOnInit() {
  }

  posaljiPodatak(){
    this.outputMetoda.emit("ZDRAVO, OVO JE PODATAK KOJI JE STIGAO IZ KOMPONENTE DUGME NAKON KLIKA");
  }

}
