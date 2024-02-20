// UserInput.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import UserInput from './UserInput';

test('allows the user to enter a question and submit it', async () => {
    render(<UserInput />);

    // Find the elements
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /submit/i });

    // Simulate user actions
    fireEvent.change(inputElement, { target: { value: 'What is TDD?' } });
    fireEvent.click(buttonElement);

    // Assertion: Check if the input field is empty after submission
    // This assumes that your UserInput component clears the input field after a question is submitted
    expect(inputElement.value).toBe('');
});