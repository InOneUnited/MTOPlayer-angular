import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../../../store/app.state';
import { Unsubscribeable } from '../../../shared/base/unsubscribeable';
import { User } from '../../../shared/model/user';
import { fetchUser, updateUser } from '../../store/actions/user.actions';
import { getCurrentUser } from '../../store/selectors/user.selector';

@Component({
  selector: 'mto-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent extends Unsubscribeable {
  user: User;
  profilePicture: string | File;
  form: FormGroup;
  todayDate = new Date();

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    super();
    this.store.dispatch(fetchUser());
    this.store
      .select(getCurrentUser)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(currentUser => {
        this.user = currentUser;
      });
    this.form = this.createFormGroupFromUser();
  }

  onFileSelected(event) {
    const files = event.target.files;
    const oneMB = 1000000;
    const formPicture = this.form.controls.picture;
    const regexFileExtension = /image\/(gif|jpg|jpeg|tiff|png)$/i;

    if (!(files && files[0])) {
      formPicture.setErrors({ noFile: true });
      this.user.picture = '';
    } else if (files[0].size > oneMB) {
      formPicture.setErrors({ fileToBig: true });
    } else if (!files[0].type.match(regexFileExtension)) {
      formPicture.setErrors({ wrongExtension: true });
    } else {
      const file = files[0] as File;
      const reader = new FileReader();
      reader.onload = e => (this.user.picture = reader.result as string);

      reader.readAsDataURL(file);
    }
  }

  onSave() {
    const updatedUser = this.formToUser();
    this.store.dispatch(updateUser({ user: updatedUser }));
  }

  private createFormGroupFromUser() {
    return this.fb.group({
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      gender: [this.user.gender],
      birthday: [this.user.birthday],
      picture: [undefined]
    });
  }

  private formToUser() {
    const formValue = this.form.value;
    return new User({
      ...this.user,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      gender: formValue.gender,
      birthday: formValue.birthday,
      picture: formValue.picture
    });
  }
}
