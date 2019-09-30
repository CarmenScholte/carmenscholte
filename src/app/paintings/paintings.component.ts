import { Component, OnInit, Renderer2 } from '@angular/core';
import imagesources from '../../assets/imgsources.json';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {

  public paintingImageSources: string[];
  public rows: any[];
  public viewboxImage: string;
  public showViewbox = false;

  constructor(private renderer: Renderer2) { 
    this.paintingImageSources = imagesources.paintings;
  }

  ngOnInit() {
    const numberOfRows = Math.ceil(this.paintingImageSources.length / 2)
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
