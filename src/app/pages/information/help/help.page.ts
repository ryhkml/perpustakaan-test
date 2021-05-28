import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  styleUrls: ['./help.page.scss'],
  templateUrl: './help.page.html'
})
export class HelpPage implements OnInit, OnDestroy {

  public ngOnInit(): void {

  }

  @HostListener('window:beforeunload')
  public ngOnDestroy(): void {

  }
}
