import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as japanese } from '../shared/i18n/fr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, japanese);
  
  }
  fname = '';
  email = '';
  object = '';
  comment = '';

  sendEmail(): void {
    const email = 'example@example.com';
    const subject = 'Contact Inquiry';
    const body = `Name: ${this.fname}\n\nEmail: ${this.email}\n\nMessage: ${this.comment}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  ngOnInit(): void {
   
  }
}
