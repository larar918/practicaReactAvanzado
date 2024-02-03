import { act, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { authLogin } from '../../../store/actions';
import LoginPage from '../LoginPage';
import userEvent from '@testing-library/user-event';

const userType = (input, text) => userEvent.type(input, text);

jest.mock('../../../store/actions')

describe('LoginPage', () => {
  const state = {};
  const store = {
    getState: () => state,
    subscribe: () => {},
    dispatch: () => {},
  };

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );

  test('snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  test('should dispatch authLogin action', async () => {
    const email = 'keepcoder';
    const password = 'password';
    renderComponent();
  
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByRole('button');
  
    console.log(document.body.innerHTML);  // Imprime el HTML del contenedor de prueba
  
    expect(submitButton).toBeDisabled();
    await act(() => userType(emailInput, email));
    await act(() => userType(passwordInput, password));
    expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);
   
    expect(authLogin).toHaveBeenCalledWith({ email, password });

  });
  
});
