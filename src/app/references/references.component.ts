import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as japanese } from '../shared/i18n/fr';
import { referencesEn} from '../api/referencesEn';
import { referencesFr} from '../api/referencesFr';
import { TranslateService } from '@ngx-translate/core';
declare const YT: any;
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements AfterViewInit {
  private player: any;

  ngAfterViewInit(): void {
    // Load the YouTube API script asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Initialize the YouTube player when the API is ready
    (window as any)['onYouTubeIframeAPIReady'] = () => this.initializePlayer();
  }

  initializePlayer(): void {
    this.player = new YT.Player('player', {
      videoId: 'vFHGpU61K_g',
      playerVars: {
        autoplay: 0, // Auto-play the video
        controls: 1, // Show video controls
        modestbranding: 1, // Hide YouTube logo
        showinfo: 0, // Hide video title and uploader info
        fs: 1, // Enable fullscreen button
      },
      events: {
        // Optional event listeners
        onReady: this.onPlayerReady.bind(this),
        onStateChange: this.onPlayerStateChange.bind(this),
      },
    });
  }

  onPlayerReady(event: any): void {
    // Optional: Perform actions when the player is ready
    event.target.playVideo();
  }

  onPlayerStateChange(event: any): void {
    // Optional: Perform actions when the player's state changes (e.g., track video progress)
  }
}
// export class ReferencesComponent implements OnInit {
//   references:any=referencesEn;
//   constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
//     this._translationLoaderService.loadTranslations(english, japanese);
//     this._translateService.onLangChange.subscribe(()=>{
//       if(this._translateService.currentLang=="en"){
//         this.references=referencesEn;
//       }
//       else{
//         this.references=referencesFr;
//       }
//     });
//   }

//   ngOnInit(): void {
//   }

// }
