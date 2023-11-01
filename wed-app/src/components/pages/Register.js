import React from 'react';

function register() {
    return (
        <div>
            <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4>About Us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <div className='card-shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6>Register Form</h6>
                                    <hr/>
                                    <div className='form-group'>
                                        <label className='mb-1'>Full Name</label>
                                        <input type="text" className='form-control' placeholder='Enter full name'/>
                                    </div>
                                    <div className='form-group'>
                                        <label className='mb-1'>Phone Number</label>
                                        <input type="text" className='form-control' placeholder='Enter phone number'/>
                                    </div>
                                    <div className='form-group'>
                                        <label className='mb-1'>Email Address</label>
                                        <input type="text" className='form-control' placeholder='Enter Email'/>
                                    </div>
                                    <div className='form-group'>
                                        <label className='mb-1'>Product</label>
                                        <input type="text" className='form-control' placeholder='Enter Product'/>
                                    </div>
                                    
                                    
                                    <div className='form-group py-3'>
                                        <button type="button" className='btn btn-primary shadow'>Register</button>
                                        <button type="button" className='btn btn-primary shadow'>cancel</button> 
                                    </div>
                                </div>
                                <div className='col-md-6 border-start'>
                                    <h5 className='main-heading'>Address Information</h5>
                                    <div className='underline'></div>
                                    <p>AnhBach Shop</p>
                                    <p>Phone: 087 xxx xxx</p>
                                    <p>Email: anhbach043@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default register;