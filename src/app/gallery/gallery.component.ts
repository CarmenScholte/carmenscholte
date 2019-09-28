import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @ViewChild('viewbox', {static: false}) private viewbox: ElementRef;

  public viewboxImage: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  public openViewBox(image: string) {
    this.viewboxImage = image;
    console.log(this.viewbox);
    this.renderer.setStyle(this.viewbox.nativeElement, 'display', 'flex');
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  public closeViewbox() {
    this.renderer.setStyle(this.viewbox.nativeElement, 'display', 'none');
    this.renderer.removeStyle(document.body, 'overflow');
    this.viewboxImage = '';
  }
}
