import * as React from "react";
import { useSelector, useDispatch } from 'react-redux'

export const <%= containerName %>: React.FunctionComponent = ({}) => {
  const result = useSelector(state => state);
  const dispatch = useDispatch();
  const dispatchCallback = React.useCallback(() => dispatch(), [dispatch])
  return <div><%= containerName %></div>
}

<%= containerName %>.displayName = "<%= containerName %>";
