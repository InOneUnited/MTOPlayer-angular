import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PasswordDataService } from '../../service/password-data.service';
import {
  fetchPasswordData,
  fetchPasswordDataFailure,
  fetchPasswordDataSuccess,
  updatePasswordData,
  updatePasswordDataFailure,
  updatePasswordDataSuccess,
} from '../actions/password-data.actions';

@Injectable()
export class PasswordDataEffects {
  constructor(private actions$: Actions, private passwordDataService: PasswordDataService) { }

  fetchPasswordData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPasswordData),
      switchMap(() => {
        return this.passwordDataService.fetchPasswordData().pipe(
          map(passwordData => fetchPasswordDataSuccess({ passwordData })),
          catchError(error => of(fetchPasswordDataFailure(error)))
        );
      })
    )
  );

  updatePasswordData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePasswordData),
      map(action => action.passwordData),
      switchMap(passwordData => {
        return this.passwordDataService.updatePasswordData(passwordData).pipe(
          map(updatedPasswordData =>
            updatePasswordDataSuccess({ passwordData: updatedPasswordData })
          ),
          catchError(error => of(updatePasswordDataFailure(error)))
        );
      })
    )
  );
}
