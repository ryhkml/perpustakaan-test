import { Component, HostBinding, HostListener } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { StorageService } from 'src/app/core/services/storage.service';

import { IntroductionComponent } from 'src/app/shared/components/introduction/introduction.component';

import { StorageKey } from 'src/app/core/constants/storage-key';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.page.scss'],
  templateUrl: './home.page.html'
})
export class HomePage implements willEnter, didLeave {

  constructor(
    // Angular services injection
    // Ionic services injection
    private readonly modalController: ModalController,
    // App services injection
    private readonly storageService: StorageService
  ) { }

  public ionViewWillEnter(): void {
    this.initIntroduction();
  }

  @HostListener('window:beforeunload')
  public ionViewDidLeave(): void {

  }

  private async initIntroduction(): Promise<void> {
    const hasVisited = await this.storageService.value<string>(StorageKey.PageIntroduction);

    if (+hasVisited!) {
      return;
    }

    const modal = await this.modalController.create({
      component: IntroductionComponent,
      backdropDismiss: false,
      keyboardClose: false,
      swipeToClose: false,
      mode: 'md',
      id: 'm-introduction'
    });

    await modal.present();
  }
}
