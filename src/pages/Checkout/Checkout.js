import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, _id, price } = service;

    const handleOrderPlace = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Order Successfully confirmed');
                form.reset();
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h2 className='text-3xl mb-2 font-semibold'>Service Name: {title}</h2>
            <h2 className='text-2xl mb-2 font-semibold'>Price: {price}</h2>
            <form onSubmit={handleOrderPlace}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered input-primary w-full " />
                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered input-primary w-full " />
                    <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered input-primary w-full" />
                    <input type="text" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly />
                </div>
                <textarea className="textarea textarea-primary textarea-bordered h-24 w-full" name="message" placeholder="Short Message"></textarea>
                <input className='btn mb-4' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;