import React from 'react';
import BasketButton from './BasketButton';

export default function Item(props) {
    return (
        <div className="Item">
            <img src={props.img}></img>
            <h2>{props.itemName}</h2>
            <p>{props.itemPrice} $</p>
            <BasketButton></BasketButton>
        </div>
    )
}