import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../../../../store/app.state';
import { UserService } from '../../service/user.service';
import {
  fetchUser,
  fetchUserFailure,
  fetchUserSuccess
} from '../actions/user.actions';
import { getCurrentUser } from '../selectors/user.selector';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  @Effect()
  fetchUser$ = this.actions$.pipe(
    ofType(fetchUser),
    withLatestFrom(this.store.select(getCurrentUser)),
    switchMap(([action, user]) => {
      return this.userService.fetchUser().pipe(
        map(() => fetchUserSuccess(user)),
        catchError(error => of(fetchUserFailure(error)))
      );
    })
  );
}
