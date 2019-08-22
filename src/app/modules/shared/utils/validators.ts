import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxDateTodayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      const now = new Date();
      const date = new Date(control.value);
      return date.getTime() > now.getTime() ? { invalidMaxDate: true } : null;
    }

    return null;
  };
}

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!isValidDate(control.value)) {
      return { invalidDate: true };
    }
    return null;
  };
}

export function isValidDate(date: any): boolean {
  if (!date) {
    return true;
  }

  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date.getTime())) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
