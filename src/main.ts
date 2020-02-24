import './style.css';

const code: HTMLElement = document.createElement('code');
document.body.appendChild(code);

export function log (value: any)  {
  console.log(value);
  code.innerHTML = JSON.stringify(value);
}

