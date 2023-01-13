import { render, screen } from '@testing-library/react';
import Greet from './Greet'

test('Greet renders correctly', () => { // test() is a Jest global method
    render(<Greet />) // create a virtual dom of the component
    const expectedMessage = screen.getByText(/hi/i) // screen is an obj provided by RTL that have some method to query the dom
    expect(expectedMessage).toBeInTheDocument() // experct() is a Jest global method
})

test('Greet renders with a name', () => {
    render(<Greet name='Andrew' />)
    const expectedMessageWithName = screen.getByText(/hi andrew/i)
    expect(expectedMessageWithName).toBeInTheDocument()
})