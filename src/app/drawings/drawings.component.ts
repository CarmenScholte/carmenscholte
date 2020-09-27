import { Component, OnInit, Renderer2 } from '@angular/core';
import imagesources from '../../assets/imgsources.json';

@Component({
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss'],
})
export class DrawingsComponent implements OnInit {
  public drawingImageSources: string[];
  public viewboxImage: string;
  public rows: any[];
  public showViewbox = false;

  constructor(private renderer: Renderer2) {
    this.drawingImageSources = imagesources.drawings;
  }

  ngOnInit() {
    const numberOfRows = Math.ceil(this.drawingImageSources.length / 2);
    this.rows = Array(numberOfRows);
  }

  public openViewBox(image: string) {
    this.viewboxImage = image;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.showViewbox = true;
  }

  public closeViewbox() {
    this.showViewbox = false;
    this.renderer.removeStyle(document.body, 'overflow');
    this.viewboxImage = '';
  }
}
