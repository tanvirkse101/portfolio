import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as japanese } from '../shared/i18n/fr';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBackground: boolean = true;
  
  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, japanese);
  }
  ngOnInit(): void {
    var options = {
      strings: ['','Full-stack Engineer', 'Python Developer','DevOps Engineer'],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}
