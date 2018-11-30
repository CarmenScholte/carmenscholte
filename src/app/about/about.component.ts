import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	public age: number;

  constructor() {
    this.age = this.getAge();
  }

  ngOnInit() {
  }

	private getAge(): number {
		const birthday = new Date(1989, 3, 26);
		const diff = Math.abs(Date.now() - birthday.getTime());
		return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	}

}
