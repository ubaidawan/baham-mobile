import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';
import { validate_email } from './Login'


describe('Login component', () => {

    test('Does the Login form render correctly?', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree.children.length).toBe(1);
        // Assert that email, password and login components are rendered
        const emailInput = getByPlaceholderText('baham.user@kiet.edu.pk'); // Use placeholder text to search for this field
        const passwordInput = getByPlaceholderText('Password'); // Use placeholder text to search for this field
        const loginButton = getByText('Login'); // Use the text to search for this field
        expect(emailInput).toBeDefined();
        expect(passwordInput).toBeDefined();
        expect(loginButton).toBeDefined();
    });

    test('Does the email validate when typing?', () => {
        const { getByPlaceholderText, getByText } = renderer.create(<Login />);
        const emailInput = getByPlaceholderText('baham.user@kiet.edu.pk');
        fireEvent.changeText(emailInput, 'test@example.com');
        expect(emailInput.props.style[1].color).toBe('black');
    });

    test('Should return true for valid email and false for an invalid email ', () => {
        const emailInput = getByPlaceholderText('baham.user@kiet.edu.pk');
        fireEvent.changeText(emailInput, 'test@example.com');
        expect(validate_email()).toBeTruthy();
        fireEvent.changeText(emailInput, 'owais.hussain@kiet.edu.pk');
        expect(validate_email()).toBeTruthy();
        fireEvent.changeText(emailInput, 'owais.hussain@kiet.edu.pk');
        isValid = validate_email('definitely_an_invalid_email_address');
        expect().toBeFalsy();
    });
});
