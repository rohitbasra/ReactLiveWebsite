import React, { useState } from 'react';

const Contact1 = () => {

    const[data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event) =>{

        const{name,value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is ${data.fullname} My Mobile Number is ${data.phone} My Email Address is ${data.email} This Website is literally ${data.msg}`);
    }
    return (
        <>
            <div className='my-5'>
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter your Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"
                                name='fullname'
                                value={data.fullname}
                                onChange={InputEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile Number"
                                name='phone'
                                value={data.phone}
                                onChange={InputEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                name='email'
                                value={data.email}
                                onChange={InputEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                name='msg'
                                value={data.msg}
                                onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact1;