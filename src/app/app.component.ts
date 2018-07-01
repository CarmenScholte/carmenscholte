import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = '- CSL -';
  public toggle: boolean = false;

	constructor(@Inject(DOCUMENT) private document: Document) {

	}

	@HostListener('window:scroll', ['$event'])
	onScroll(event) {
		console.log('Scrolling...');
		console.log(event);
	}

}
