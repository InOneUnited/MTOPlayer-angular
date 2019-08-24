import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  SHOW_UNSAVED_CHANGES_MODAL = '[app] Show unsaved changes modal',
  CLOSE_UNSAVED_CHANGES_MODAL = '[app] Close unsaved changes modal',

  TRY_AGAIN = '[app] Try again',
  EMPTY = '[app] Empty',
  WARNING = '[app] Warning',
  ERROR = '[app] Error',

  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward'
}
export class TryAgain implements Action {
  readonly type = AppActionTypes.TRY_AGAIN;
}

export class Empty implements Action {
  readonly type = AppActionTypes.EMPTY;
}

export class ActionWarning implements Action {
  readonly type = AppActionTypes.WARNING;
  constructor(public warning: any) {}
}

export class ActionError implements Action {
  readonly type = AppActionTypes.ERROR;
  constructor(public failure: any) {}
}

export class Go implements Action {
  readonly type = AppActionTypes.GO;

  constructor(
    public payload: {
      path?: string;
      query?: object;
      extras?: NavigationExtras;
      route?: ActivatedRoute;
      absoluteUrl?: string;
    }
  ) {}
}

export class Back implements Action {
  readonly type = AppActionTypes.BACK;
}

export class Forward implements Action {
  readonly type = AppActionTypes.FORWARD;
}

export class ShowUnsavedChangesModal implements Action {
  readonly type = AppActionTypes.SHOW_UNSAVED_CHANGES_MODAL;
  //   constructor(public tracker: ChangeTracker) {}
}

export class CloseUnsavedChangesModal implements Action {
  readonly type = AppActionTypes.CLOSE_UNSAVED_CHANGES_MODAL;
}

export type RouterActionsUnion = Go | Back | Forward;

export type AppActions =
  | Back
  | Empty
  | Forward
  | Go
  //   | Logout
  | TryAgain;
