import React from 'react'
import App from 'palha';
import { createReactRenderer } from 'utils/palhaReactRenderer';
import registerServiceWorker from 'utils/registerServiceWorker';

import Game from 'components/Game';
import {runAction} from 'actions';
import {loadModel} from 'storage';

import 'sanitize.css';
import 'index.css';

export const initialModel = {
  stage: "SPLASH",
};

export const view = (model, dispatch) => (
  <Game model={model} dispatch={dispatch} />
);

export const update = (model, actionId) => (
  runAction(model, actionId)
);

const stranded = new App({
  initialModel: loadModel() || initialModel,
  update: update,
  view: view,
  renderer: createReactRenderer(document.getElementById('root')),
});

stranded.start();

registerServiceWorker();
