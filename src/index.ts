import { fromEvent } from 'rxjs';

fromEvent(document.getElementById('myInput'), 'input')
  .subscribe((event: KeyboardEvent) => {
    console.log('text:', (event.target as HTMLInputElement).value)
  })
