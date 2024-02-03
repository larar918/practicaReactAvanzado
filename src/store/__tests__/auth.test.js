import { authLogout, authLogin } from '../actions';
import { AUTH_LOGOUT } from '../types';

describe('authLogout', () => {
  test('should create an action to logout the user', () => {
    const expectedAction = {
      type: AUTH_LOGOUT
    };
    const action = authLogout();
    expect(action).toEqual(expectedAction);
  });
});



