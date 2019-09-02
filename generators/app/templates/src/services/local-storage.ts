import { Types } from 'Types';

const APP_SERIALIZED_STATE_KEY = `__APP_SERIALIZED_STATE__`;

export const saveState = (state: Types.RootState): boolean => {
  if (!localStorage) {
    return false;
  }

  const { auth } = state;

  try {
    const serializedState = JSON.stringify({ auth });
    localStorage.setItem(APP_SERIALIZED_STATE_KEY, serializedState);
    return true;
  } catch (error) {
    throw new Error('store serialization failed');
  }
};

export const loadState = (): Types.RootState | undefined => {
  if (!localStorage) {
    return;
  }

  try {
    const serializedState = localStorage.getItem(APP_SERIALIZED_STATE_KEY);
    if (serializedState == null) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    throw new Error('store deserialization failed');
  }
};

export const clearState = () => {
  localStorage.removeItem(APP_SERIALIZED_STATE_KEY);
};
