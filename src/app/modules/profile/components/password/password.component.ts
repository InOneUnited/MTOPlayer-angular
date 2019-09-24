import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Unsubscribeable } from 'src/app/modules/shared/base/unsubscribeable';
import { PasswordData } from 'src/app/modules/shared/model/password-data';
import { AppState } from 'src/app/store/app.state';

import { fetchPasswordData } from '../../store/actions/password-data.actions';
import { getCurrentPasswordData } from '../../store/selectors/password-data.selector';

@Component({
  selector: 'mto-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent extends Unsubscribeable {
  form: FormGroup;
  passwordData: PasswordData;

  constructor(private store: Store<AppState>, private fb: FormBuilder, private el: ElementRef) {
    super();
    this.store.dispatch(fetchPasswordData());
    this.store
      .select(getCurrentPasswordData)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(currentPasswordData => {
        this.passwordData = currentPasswordData;
        this.form = this.createFormGroupFromPasswordData();
      });
  }

  onChange(event) {
    const input = event.source._elementRef.nativeElement.parentElement.parentElement.firstChild.getElementsByTagName('input')[0];
    input.getAttribute('type') === 'text' ? input.setAttribute('type', 'password') : input.setAttribute('type', 'text');
  }

  onSave() {
  }

  private createFormGroupFromPasswordData(): FormGroup {
    return this.fb.group({
      email: [this.passwordData.email],
      oldPassword: [this.passwordData.password],
      newPassword: [],
    });
  }

  private formToPasswordData(): PasswordData {
    const formValue = this.form.value;
    return new PasswordData({
      ...this.passwordData,
      email: formValue.firstName,
      password: formValue.newPassword
    });
  }
}
