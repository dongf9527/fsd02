import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.css']
})
export class VideoViewComponent implements OnInit {

  @ViewChild('mediaVideo', {static: false}) videoPlayer: ElementRef;

  @ViewChild('progressBar', {static: true}) progressBar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
