import { Component, Input } from '@angular/core';

export class Video {
  title: string;
  url: string;
  status: string;
  approved: boolean;
  likes: number;
  unlike: number;
  currentStatus: string;
  exitplayprogress: number;
}

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideoListComponent {

  @Input() videos: Video;


  constructor() {
  }




}
