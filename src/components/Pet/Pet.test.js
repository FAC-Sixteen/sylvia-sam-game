import React from 'react';
import { render } from 'react-testing-library';
import Pet from './Pet';

const mockName = "Chomby";

test("the pet works", () => {
    const {findByAltText} = render(<Pet name={mockName}/>);
    
    return findByAltText(mockName)
})  

