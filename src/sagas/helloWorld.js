import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as c from '../constants';


function* helloWorld(action) {
  yield put({ type: c.SAGA_SAYS_HELLO_WORLD });
}


export function watchStartApp() {
  return takeLatest(c.HELLO_WORLD, helloWorld);
}
