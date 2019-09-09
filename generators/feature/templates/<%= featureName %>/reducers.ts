import { combineReducers } from "redux";
import { ActionType,getType } from "typesafe-actions";

import { <%= featureName %>Actions } from ".";

export type <%= featureName %>Actions = ActionType<typeof <%= featureName %>Actions>;
export type <%= featureName %>State = Readonly<{
  isFetching: boolean;
}>;

const isFetchingReducer = (state: <%= featureName %>State['isFetching'] = false, action: <%= featureName %>Actions) => {
  switch(action.type) {
    case getType(<%= featureName %>Actions.exampleAction):
      return true;

    default:
      return false;
  }
}

export default combineReducers<<%= featureName %>Actions, <%= featureName %>State>({
  isFetching: isFetchingReducer,
});
