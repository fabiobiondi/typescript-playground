import './style.css';
const code: HTMLElement = document.createElement('pre');
const btn: HTMLElement = document.createElement('button');
const input: HTMLElement = document.createElement('input');

(() => {
  document.body.appendChild(code);

  btn.className = 'btn';
  btn.innerText = 'CLICK ME'
  document.body.appendChild(btn);

  input.id = 'myInput';
  document.body.appendChild(input);

  alert()
})()

export function log (value: any)  {
  const output = JSON.stringify(value, undefined, 2);
  console.log(output);
  code.innerHTML = output;
}
