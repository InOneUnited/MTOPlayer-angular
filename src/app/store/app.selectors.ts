import { AppState } from './app.state';

export const getConnectionLost = (state: AppState) => {
  return state.connectionLost;
};
