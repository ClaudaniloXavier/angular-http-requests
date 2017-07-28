import { AfterViewInit, OnDestroy, Component, OnInit } from '@angular/core';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
  selector: 'ar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy, OnInit {

  constructor(
      private toolbarService: UiToolbarService,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
      this.toolbarService.set('Home');
      // this.toolbarService.activateExtendedToolbar();
  }

  ngOnDestroy() {
      // this.toolbarService.deactivateExtendedToolbar();
  }

}
