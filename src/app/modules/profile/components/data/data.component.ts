import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../../../../store/app.state';
import { Unsubscribeable } from '../../../shared/base/unsubscribeable';
import { User } from '../../../shared/model/user';
import { fetchUser } from '../../store/actions/user.actions';
import { getCurrentUser } from '../../store/selectors/user.selector';

@Component({
  selector: 'mto-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent extends Unsubscribeable {
  user: User;
  form: FormGroup;
  todayDate = new Date();

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    super();
    this.form = this.createFormGroup();
    store.dispatch(fetchUser());
    this.store
      .select(getCurrentUser)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(currentUser => {
        this.user = currentUser;
      });
  }

  onFileSelected(event) {
    console.log(event);
  }

  private createFormGroup() {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthday: [undefined]
    });
  }

  onSave() {
    console.log('user', this.user);
  }
}
