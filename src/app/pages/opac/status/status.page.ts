import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { distinctUntilChanged, map } from 'rxjs/operators';

import { SubSink } from 'subsink';

@Component({
  selector: 'app-status',
  styleUrls: ['./status.page.scss'],
  templateUrl: './status.page.html'
})
export class StatusPage implements OnInit, OnDestroy {

  public status: boolean = false;
  public statusStr: string | null = null;

  private readonly pageSubscriptions: SubSink = new SubSink();

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.pageSubscriptions.add(
      this.activatedRoute.paramMap.pipe(
        map(param => param.get('id')),
        distinctUntilChanged()
      )
      .subscribe(status => {
        this.status = !!+status!;
        this.statusStr = status;
      })
    );
  }

  @HostListener('window:beforeunload')
  public ngOnDestroy(): void {
    this.pageSubscriptions.unsubscribe();
  }
}
