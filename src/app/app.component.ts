import { Component, HostListener, Inject } from '@angular/core';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public toggle = false;

	public showNavigation = true;

	constructor(private router: Router,
							public translateService: TranslateService) {
		this.router.events.subscribe((event: RouterEvent) => {
			console.log(event);
			if (event instanceof NavigationStart) {
				if (event.url === '/cv') {
					this.showNavigation = false;
				} else {
					this.showNavigation = true;
				}
			}
		});

		this.translateService.setDefaultLang('nl');
		this.translateService.use('nl');
	}

	public switchLanguage(language: string) {
		this.translateService.use(language);
		console.log('Taal is nu ' + language);
	}
}
