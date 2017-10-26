import { watchStartApp } from './helloWorld';


export default function* rootSaga() {
  return yield [
    watchStartApp(),
  ];
}
