import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { CardTrailerComponent } from '../../components/card-trailer/card-trailer.component';
import { RoundIconBorderComponent } from '../../components/round-icon-border/round-icon-border.component';
import { SoniaIaComponent } from '../../components/sonia-ia/sonia-ia.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardTrailerComponent,
    RoundIconBorderComponent,
    CommonModule,
    SoniaIaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;

  readonly iconPlayer = '../../../assets/icons/play.png';
  readonly iconStop = '../../../assets/icons/stop.png';

  playIcon = this.iconPlayer;
  iconSound = '../../../assets/icons/sound.png';

  toggleIcon = (paused: boolean) =>
    paused ? this.playIcon = this.iconPlayer : this.playIcon = this.iconStop;

  playerVideo = (video: HTMLVideoElement) =>
    video.paused ? video.play() : video.pause();

  toggleMute = (): void => {
    if (this.videoPlayer) {
      const video: HTMLVideoElement = this.videoPlayer.nativeElement;
      video.muted = !video.muted;

      this.iconSound = video.muted ? '../../../assets/icons/sound-mute.png' : '../../../assets/icons/sound.png';
    }
  };

  togglePlayback(): void {
    if (this.videoPlayer) {
      const video: HTMLVideoElement = this.videoPlayer.nativeElement;

      this.playerVideo(video);
      this.toggleIcon(video.paused);
    }
  }
}
