import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-consult-coordination',
  templateUrl: './consult-coordination.component.html',
  styleUrls: ['./consult-coordination.component.css']
})
export class ConsultCoordinationComponent implements OnInit {

  constructor(private router: Router, private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll(page: string, anchor: string) {
    this.router.navigate(["/" + page], { fragment: anchor });
  }

}
