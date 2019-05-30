import React from 'react';
import { render } from 'react-testing-library';
import FoodOptions from './FoodOptions';

// const mockFood = { description: "omelette", name: omelette, value: "30" };

test("FoodOptions shows food", () => {
    const {getByTestId} = render(<FoodOptions  />);
    getByTestId("food-button")
})