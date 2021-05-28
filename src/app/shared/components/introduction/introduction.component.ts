import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { IonSlides, ModalController } from '@ionic/angular';

import { noop } from 'rxjs';
import { finalize, first } from 'rxjs/operators';

import { StorageService } from 'src/app/core/services/storage.service';

import { StorageKey } from 'src/app/core/constants/storage-key';

@Component({
  selector: 'app-introduction',
  styleUrls: ['./introduction.component.scss'],
  templateUrl: './introduction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionComponent implements AfterViewInit {

  @ViewChild(IonSlides)
  private readonly ionSlides!: IonSlides;

  constructor(
    // Angular services injection
    // Ionic services injection
    private readonly modalController: ModalController,
    // App services injection
    private readonly storageService: StorageService
  ) { }

  public ngAfterViewInit(): void {
    this.ionSlides.ionSlideReachEnd.pipe(
      first(),
      finalize(() => this.storageService.emit(StorageKey.PageIntroduction, '1'))
    )
    .subscribe(noop);
  }

  public async dismissModal(): Promise<void> {
    await this.modalController.dismiss();
  }
}
