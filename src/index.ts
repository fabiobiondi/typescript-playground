import { fromEvent } from 'rxjs';
import { log } from './main';

fromEvent(document.getElementById('myInput'), 'input')
  .subscribe((event: KeyboardEvent) => {
    console.log('text:', (event.target as HTMLInputElement).value)
  })
fromEvent(document.getElementById('btn'), 'click')
  .subscribe(console.log)


log('Helo World')
