import { authLogout } from '../actions';
import { auth, defaultState } from '../reducers';

describe('auth', () => {
  test('should manage "AUTH_LOGOUT" action', () => {
    const state = defaultState;
    const action = authLogout();
    expect(auth(state, action)).toBe(false);
  });
});