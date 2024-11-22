import './styles/style.scss'
import { Game } from './app/Game';
import { cssRootId } from './app/consts/cssRootId';

// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
// import { Move } from './Move'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

// const a = new Move(document.querySelector('.card')!, 6, 9);
// window.addEventListener('keydown', a.handleKeyPress);



document.addEventListener('DOMContentLoaded', () => {
  const appNode = document.createElement('div');
  appNode.classList.add(cssRootId);
  document.body.appendChild(appNode);

  new Game(480, appNode).init();
});
