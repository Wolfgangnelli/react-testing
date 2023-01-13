import { render, screen } from '@testing-library/react';
import Greet from './Greet'

test('Greet', () => { // test() is a Jest global method
    render(<Greet message='hello' />) // create a virtual dom of the component
    const expectedMessage = screen.getByText(/hello/i) // screen is an obj provided by RTL that have some method to query the dom
    expect(expectedMessage).toBeInTheDocument() // experct() is a Jest global method
})