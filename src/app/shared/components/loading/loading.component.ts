import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  styleUrls: ['./loading.component.scss'],
  templateUrl: './loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent { }
