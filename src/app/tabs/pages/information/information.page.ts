import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-information',
  styleUrls: ['./information.page.scss'],
  templateUrl: './information.page.html'
})
export class InformationPage implements willEnter, didLeave {

  public ionViewWillEnter(): void {

  }

  @HostListener('window:beforeunload')
  public ionViewDidLeave(): void {

  }
}
