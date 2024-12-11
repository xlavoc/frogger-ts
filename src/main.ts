import './styles/style.scss';
import { Game } from './app/Game';
import { cssRootId } from './app/consts/cssRootId';

document.addEventListener('DOMContentLoaded', () => {
  const appNode = document.createElement('div');
  appNode.classList.add(cssRootId);
  document.body.appendChild(appNode);

  new Game(appNode).init();
});
