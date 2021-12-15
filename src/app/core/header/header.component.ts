import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() page: string;
  public menuActive: boolean = false;

  public activeMenu() {
    this.menuActive = !this.menuActive;
  }

  public closeMenu() {
    this.menuActive = false;
  }
}
