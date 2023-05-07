import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('target', { static: true }) target: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options: {
    fluid: true;
    aspectRatio: '4:3';
    autoplay: true;
    sources: [
      {
        src: 'https://devstgeacct.blob.core.windows.net/au-video-backup/RV-ROBOT-418.0/RV-ROBOT-418.0_2023-04-26_08-01-44.ts';
        type: "application/x-mpegURL"
      }
    ];
  };
  // @ts-ignore
  player: videojs.Player;

  constructor(private elementRef: ElementRef) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    // @ts-ignore
    this.player = videojs(
      this.target.nativeElement,
      this.options,
      function onPlayerReady() {
        console.log('onPlayerReady', this);
      }
    );
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
