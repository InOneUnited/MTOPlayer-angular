import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../../../../store/app.state';
import { UserService } from '../../service/user.service';
import * as UserActions from '../actions/user.actions';
import { getCurrentUser } from '../selectors/user.selector';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.fetchUser),
      // withLatestFrom(this.store.select(getCurrentUser)),
      switchMap(() => {
        return this.userService.fetchUser().pipe(
          map(user => UserActions.fetchUserSuccess({ user })),
          catchError(error => of(UserActions.fetchUserFailure(error)))
        );
      })
    )
  );
}
