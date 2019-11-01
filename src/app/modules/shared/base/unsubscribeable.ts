import { HostListener, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class Unsubscribeable implements OnDestroy {
  protected unsubscribe: Subject<boolean> = new Subject();

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.onDestroy();
  }

  protected onDestroy() {}
}
