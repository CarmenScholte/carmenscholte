import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public age: number;
  
  constructor() { }

  ngOnInit() {
    this.age = this.getAge();
  }

  private getAge(): number {
		const birthday = new Date(1989, 3, 26);
		const diff = Math.abs(Date.now() - birthday.getTime());
		return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	}

}
