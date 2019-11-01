import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mtoApiName' })
export class ApiNamePipe implements PipeTransform {
  transform(text: string) {
    if (text === 'soundcloud') {
      return (text = 'SoundCloud');
    } else {
      return text.replace('_', ' ').replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
}
