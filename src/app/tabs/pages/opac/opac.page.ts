import { Component, HostListener, ViewChild } from '@angular/core';

import { IonSearchbar } from '@ionic/angular';

import { firstValueFrom, timer } from 'rxjs';

import { deburr, isEmpty, trim } from 'lodash';

import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-opac',
  styleUrls: ['./opac.page.scss'],
  templateUrl: './opac.page.html'
})
export class OpacPage implements willEnter, didLeave {

  public keyword: string = '';
  public loading: boolean = false;

  @ViewChild(IonSearchbar)
  private readonly ionSearchbar!: IonSearchbar;

  constructor(
    // Angular services injection
    // Ionic services injection
    // App services injection
    private readonly loadingService: LoadingService
  ) { }

  public ionViewWillEnter(): void {

  }

  @HostListener('window:beforeunload')
  public ionViewDidLeave(): void {

  }

  public async onSubmitSearchBar(event: Event): Promise<void> {
    const value = trim((event.target as unknown as { value: string }).value);

    if (isEmpty(value)) {
      return;
    }

    this.loading = true;
    this.loadingService.start();

    await firstValueFrom(timer(1000));

    this.keyword = deburr(value);
    this.loading = false;
    this.loadingService.dismiss();
  }

  public async cleaningUp(event: Event): Promise<void> {
    const refresh = event.target as unknown as { complete(): void };

    this.loading = true;
    this.loadingService.start();

    const [_, nativeInput] = await Promise.all([
      firstValueFrom(timer(2000)),
      this.ionSearchbar.getInputElement()
    ]);

    nativeInput.value = '';

    this.keyword = '';
    this.loading = false;
    this.loadingService.dismiss();

    refresh.complete();
  }
}
