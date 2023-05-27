import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentYear:number;
  constructor(
    private _translateService: TranslateService,
    private elementRef: ElementRef
    ) {
    this._translateService.addLangs(['en', 'fr']);
    this._translateService.setDefaultLang('fr');
    this.currentYear=new Date().getFullYear();
  }

  ngOnInit(): void {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", 'en');
    }
    let lang: any = localStorage.getItem("lang");
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
  
    let hasScrolled = false;
  
    const scrollTimeout = () => {
      if (!hasScrolled) {
        const section = this.elementRef.nativeElement.querySelector('#about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          hasScrolled = true;
        }
      }
    };
  
    setTimeout(scrollTimeout, 3500);
  }
}
