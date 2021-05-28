import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private readonly subject: Subject<boolean> = new Subject<boolean>();

  public dismiss(): void {
    this.subject.next(false);
  }

  public start(): void {
    this.subject.next(true);
  }

  public get valueChanges(): Observable<boolean> {
    return this.subject.asObservable().pipe(
      startWith(false)
    );
  }
}
