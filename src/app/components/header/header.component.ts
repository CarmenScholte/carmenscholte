import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showMobileNavMenu: boolean;
  @Output() showMobileNavMenuChange = new EventEmitter<boolean>();

  public showNavigation = true;
  public toggle = false;
  public language: string;

  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {
    console.log(this.showMobileNavMenu);
    this.language = 'nl';
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/cv') {
          this.showNavigation = false;
        } else {
          this.showNavigation = true;
        }
      }
    });
  }

  ngOnInit(): void {
    console.log(this.showMobileNavMenu);
  }

  public switchLanguage(language: string) {
    this.translateService.use(language);
    this.language = language;
  }
}
