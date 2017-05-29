import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public fixed: boolean = false;
  constructor( @Inject(DOCUMENT) private document: Document) { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let num = document.documentElement.scrollTop || this.document.body.scrollTop;
    if (num > 255) {
      this.fixed = true;
    } else if (this.fixed && num < 255) {
      this.fixed = false;
    }
  }

  ngOnInit() {
  }

}
