import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    this.translateService.setDefaultLang('nl');
    this.translateService.use('nl');
  }
}
