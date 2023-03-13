import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Python, Django, Flask",percent:95,remark:'excellent'}, {name:"Java, Spring-Boot",percent:75,remark:'good'},{name:"PHP, CodeIgniter",percent:75,remark:'good'}, {name:"JavaScript,TypeScript, Angular 8+", percent:75,remark:'good'}, {name:"Golang, Gin", percent:50,remark:'average'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Jupyter Notebook, Selenium, Scrappy",percent:50,remark:'average'},{name:"Linux, Windows",percent:90,remark:'very-good'},{name:"MySQL, PostgreSQL, MongoDB",percent:90,remark:'excellent'},{name:"Docker, Jenkins",percent:75,remark:'good'}],
    methodologies:[{name:"Scrum, Agile",percent:75,remark:'very-good'},{name:"SDS, SRS, Documentation",percent:75,remark:'very-good'},{name:"PDCA",percent:75,remark:'very-good'},{name:"TDD, Testing",percent:60,remark:'average'},{name:"DevOps",percent:75,remark:'very-good'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
