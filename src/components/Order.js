import React from 'react';
import './Order.css';
import BasketItem from './CheckoutProduct'
import moment from "moment";
import CurrencyFormat from "react-currency-format";


function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="order__id">
                <strong>Order No:</strong> {order.id}
            </p>
            {order.data.basket?.map(item => (
                <BasketItem
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    hideButton={true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            /> 
        </div>
    )
}

export default Order
