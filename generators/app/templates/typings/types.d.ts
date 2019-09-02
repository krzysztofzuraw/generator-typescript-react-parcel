import { StateType } from 'typesafe-actions';

import { rootReducer } from '~src/store';
import * as services from '~src/services';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = any;
  export type Services = typeof services;
}
