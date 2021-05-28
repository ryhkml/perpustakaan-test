import { Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';

import { SubscriptionLike } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  public loading: boolean = false;

  private loadingSubscription: SubscriptionLike | undefined = undefined;

  @HostBinding('attr.ng-version')
  private readonly ngVersion: null = null;

  constructor(
    private readonly loadingService: LoadingService
  ) { }

  public ngOnInit(): void {
    this.loadingSubscription = this.loadingService.valueChanges.pipe(
      distinctUntilChanged()
    )
    .subscribe(v => this.loading = v);
  }

  @HostListener('window:beforeunload')
  public ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }
}
