import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Unsubscribeable } from 'src/app/modules/shared/base/unsubscribeable';
import { PasswordData } from 'src/app/modules/shared/model/password-data';
import { getCurrentPasswordData } from '../../store/selectors/password-data.selector';
import { fetchPasswordData } from '../../store/actions/password-data.actions';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mto-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent extends Unsubscribeable {
  form: FormGroup;
  passwordData: PasswordData;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
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

  onSave(){
    
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
