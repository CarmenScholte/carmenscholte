import { Component, } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public toggle = false;
	public showMobileNavMenu = false;
	public showNavigation = true;
	public language: string;

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

		this.language = 'nl';
		this.translateService.setDefaultLang('nl');
		this.translateService.use('nl');
	}

	public switchLanguage(language: string) {
		this.translateService.use(language);
		this.language = language;
	}
}
