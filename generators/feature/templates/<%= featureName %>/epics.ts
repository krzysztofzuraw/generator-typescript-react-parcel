import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import Types from 'Types';
import {  <%= featureName %>Actions } from '.';

const exampleEpic: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, {}, { mockService}) =>
  action$.pipe(
    filter(isActionOf(<%= featureName %>Actions.exampleAction)),
    switchMap(action =>
      from(
        mockService()
      ).pipe(
        map(res => <%= featureName %>Actions.exampleAction()),
        catchError(() => of(<%= featureName %>Actions.exampleAction()))
      )
    )
  );

export default exampleEpic;
