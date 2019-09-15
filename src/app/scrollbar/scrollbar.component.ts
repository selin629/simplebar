import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollbarComponent implements OnInit {
  title = 'angular';
  options = {
    autoHide: false,
    classNames: {
      container: 'simplebar',
      scrollContent: 'simplebar-scroll-content',
      offset: 'simplebar-offset',
      mask: 'simplebar-mask',
      wrapper: 'simplebar-wrapper',
      placeholder: 'simplebar-placeholder',
      scrollbar: 'simplebar-scrollbar',
      track: 'simplebar-track',
      heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
      heightAutoObserverEl: 'simplebar-height-auto-observer',
      visible: 'simplebar-visible',
      horizontal: 'simplebar-horizontal',
      vertical: 'simplebar-vertical',
      hover: 'simplebar-hover',
      dragging: 'simplebar-dragging',
      scrollbarTrack: 'simplebar-track'
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
