import * as <%= featureName %>Actions from './actions';
import <%= featureName %>Reducer, {
  <%= featureName %>Actions,
  <%= featureName %>State,
} from './reducers';
import <%= featureName %>Epics from './epics';
import * as <%= featureName %>Selectors from './selectors';

export {
  <%= featureName %>Actions,
  <%= featureName %>Reducer,
  <%= featureName %>Actions,
  <%= featureName %>State,
  <%= featureName %>Epics
}
