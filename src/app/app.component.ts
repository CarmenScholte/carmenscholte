import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationStart, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = '- CSL -';
  public toggle: boolean = false;

	public showNavigation = true;

	constructor(@Inject(DOCUMENT) private document: Document,
							private router: Router) {

		router.events.subscribe( (event: RouterEvent) => {
			console.log(event);
			if (event instanceof NavigationStart) {
				if (event.url === '/cv') {
					this.showNavigation = false;
				} else {
					this.showNavigation = true;
				}
			};

		});
	}


	@HostListener('window:scroll', ['$event'])
	onScroll(event) {
		console.log('Scrolling...');
		console.log(event);
	}



}
