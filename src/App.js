import React from 'react';
import { render } from 'react-dom';
import Item from './components/Item';

export default function App() { 
    return (
        <div className="App">
            <p>THIS IS APP</p>
            <Item img="../src/images/image40.png" itemName="Olympus OM-D E-M5" itemPrice="28 000"></Item>
        </div>
    )
}