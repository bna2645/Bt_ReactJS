import React, { useEffect, useState } from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from './inc/Vmc';
import Service1 from '../images/img1.jpg';
import axios from 'axios';

function Home() {
    const [services, setServices] = useState([]);
    const loadServices = async () => {
        try {
            const rs = await axios.get("http://localhost:8000/services")
            setServices(rs.data)
        } catch (error) {
            
        }
    }
    useEffect(( )=>{
        loadServices()
    },[])
    return (
        <div>
            <Slider/>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>Our Company</h3>
                            <div className='underline mx-auto'></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Link to="/about" className='btn btn-warning shadow'> Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our vision, mission and values */}
            <VMC/>

            {/* Our Services */}
            <section className='section  border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Services</h3>
                            <div className='underline mx-auto'></div>
                        </div> 

                        {services.map((item,index)=>{
                            return(
                                <div className='col-md-4' key={index}>
                            <div className='card shadow'>
                                <img src={item.image} className='w-100 border-bottom' alt="Services"/>
                                <div className='card-body'>
                                    <h6>{item.title}</h6>
                                    <div className='underline'></div>
                                    <p>{item.description}</p>
                                    <Link to="/services" className='btn btn-link'>read more</Link>
                                </div>
                            </div>
                            
                        </div>
                            )
                            
                        })}

                        

                        
                            
                        
                        
                        
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default Home;