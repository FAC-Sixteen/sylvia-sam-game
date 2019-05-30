import React from 'react';
import { render } from 'react-testing-library';
import HungerBar from './HungerBar';

test("hunger bar shows", () => {
    const {getByTestId} = render(<HungerBar/>);
    getByTestId("hunger-bar")
})