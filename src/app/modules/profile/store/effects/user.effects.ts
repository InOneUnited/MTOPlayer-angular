import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../service/user.service';
import { fetchUser, fetchUserSuccess, fetchUserFailure, updateUser, updateUserSuccess, updateUserFailure } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUser),
      switchMap(() => {
        return this.userService.fetchUser().pipe(
          map(user => fetchUserSuccess({ user })),
          catchError(error => of(fetchUserFailure(error)))
        );
      })
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      map(action => action.user),
      switchMap(user => {
        return this.userService.updateUser(user).pipe(
          map(updatedUser =>
            updateUserSuccess({ user: updatedUser })
          ),
          catchError(error => of(updateUserFailure(error)))
        );
      })
    )
  );
}
