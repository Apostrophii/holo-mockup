import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('homescreen') homescreenElRef: ElementRef;
  homescreenEl: HTMLDivElement;

  ngOnInit() {
    this.homescreenEl = this.homescreenElRef.nativeElement;

    window.onresize = this.resizeHomescreen;
    this.resizeHomescreen();
  }

  resizeHomescreen = () => {
      const scale = Math.min(
        window.innerWidth / this.homescreenEl.offsetWidth,
        window.innerHeight / this.homescreenEl.offsetHeight
      );
      this.homescreenEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
}
