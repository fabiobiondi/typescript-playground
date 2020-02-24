import './style.css';

const code: HTMLElement = document.createElement('pre');
document.body.appendChild(code);

export function log (value: any)  {
  console.log(value);
  code.innerHTML = (value);
}

