import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() showMobileNavMenu = false;
  @Input() theme: string;
  @Output() showMobileNavMenuChange = new EventEmitter<boolean>();

  public toggle = false;
  public language: string;

  constructor(public translateService: TranslateService) {
    this.language = 'nl';
  }

  ngOnInit(): void {
    if (this.theme === 'light') {
      document.getElementsByTagName('nav')[0].classList.add('header--light');
    }
  }
  

  public switchLanguage(language: string) {
    this.translateService.use(language);
    this.language = language;
  }
}
