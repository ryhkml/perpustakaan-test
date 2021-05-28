import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { distinctUntilChanged, map } from 'rxjs/operators';

import { SubSink } from 'subsink';

@Component({
  selector: 'app-collection',
  styleUrls: ['./collection.page.scss'],
  templateUrl: './collection.page.html'
})
export class CollectionPage implements OnInit, OnDestroy {

  public id: string | null = null;

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
      .subscribe(id => this.id = id)
    );
  }

  @HostListener('window:beforeunload')
  public ngOnDestroy(): void {
    this.pageSubscriptions.unsubscribe();
  }
}
