import { Result } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../Hooks/useTitle';
import OrderRaw from './OrderRaw';



const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useTitle('Orders');

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            // .catch(err => console.log(err))
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete this item");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = orders.filter(ord => ord._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("status success fully updated");
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }
    return (
        <div>
            <h2 className='text-5xl font-bold'>You Have {orders.length} order</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <p>Delete</p>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRaw
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}></OrderRaw>)
                        }
                    </tbody>
                </table>
            </div>
            <input className='btn mb-4' type="submit" value="Place Your Order" />
        </div>
    );
};

export default Orders;