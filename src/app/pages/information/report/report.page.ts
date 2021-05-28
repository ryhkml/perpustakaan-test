import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  styleUrls: ['./report.page.scss'],
  templateUrl: './report.page.html'
})
export class ReportPage implements OnInit, OnDestroy {

  public ngOnInit(): void {

  }

  @HostListener('window:beforeunload')
  public ngOnDestroy(): void {

  }
}
