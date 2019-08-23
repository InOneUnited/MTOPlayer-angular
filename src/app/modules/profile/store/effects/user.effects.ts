import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../../../../store/app.state';
import { UserService } from '../../service/user.service';
import {
  FetchUser,
  FetchUserFailure,
  FetchUserSuccess,
  UserActionTypes
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
    ofType<FetchUser>(UserActionTypes.FETCH_USER),
    withLatestFrom(this.store.select(getCurrentUser)),
    switchMap(([action, user]) => {
      return this.userService.fetchUser().pipe(
        map(() => new FetchUserSuccess(user)),
        catchError(error => of(new FetchUserFailure(error)))
      );
    })
  );
}
