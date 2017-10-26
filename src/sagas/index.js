import { helloWorld } from './helloWorld';


export default function* rootSaga() {
  return yield [
    helloWorld(),
  ];
}
