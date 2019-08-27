import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../service/user.service';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.fetchUser),
      switchMap(() => {
        return this.userService.fetchUser().pipe(
          map(user => UserActions.fetchUserSuccess({ user })),
          catchError(error => of(UserActions.fetchUserFailure(error)))
        );
      })
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      map(action => action.user),
      switchMap(user => {
        return this.userService.updateUser(user).pipe(
          map(updatedUser =>
            UserActions.updateUserSuccess({ user: updatedUser })
          ),
          catchError(error => of(UserActions.updateUserFailure(error)))
        );
      })
    )
  );
}
