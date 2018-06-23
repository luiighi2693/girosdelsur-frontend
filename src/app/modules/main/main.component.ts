import {Component, OnInit, Renderer} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private renderer: Renderer) {
    this.renderer.setElementClass(document.body, '1-column', false);
    this.renderer.setElementClass(document.body, 'bg-full-screen-image', false);
    this.renderer.setElementClass(document.body, 'blank-page', false);

    this.renderer.setElementClass(document.body, '2-columns', true);
    this.renderer.setElementClass(document.body, 'fixed-navbar', true);
  }

  ngOnInit() {
  }
}
