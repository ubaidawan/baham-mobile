import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';

describe('Login', () => {
  
  test('That Login renders without crashing', () => {
    render(<Login />);
  });

  test('That Login navigates to the menu on successful login', () => {
    // Create a mock/dummy navigation object
    const navigationMock = {
      navigate: jest.fn(),
    };
    // Render the Login component with the mock navigation object so that its child components can be fetched
    const { getByPlaceholderText, getByText } = render(<Login navigation={navigationMock} />);
    // Get the email and password input components by placeholder text as reference
    const emailInput = getByPlaceholderText('baham.user@kiet.edu.pk');
    const passwordInput = getByPlaceholderText('Password1234');
    // Get login pressable by Text
    const loginButton = getByText('Login');
    // Simulate user interaction by changing the input values
    fireEvent.changeText(emailInput, 'admin@dareecha.com');
    fireEvent.changeText(passwordInput, 'Password123');
    // Simulate the Login button press
    fireEvent.press(loginButton);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Menu');
  });
});
