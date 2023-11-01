import React from "react";
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <section className='section  footer bg-dark text-white'>
                <div className='container'>
                    <div className='row'>
                          
                        <div className='col-md-4 '>
                            <h6>Company Information</h6>
                            <hr/>
                            <p className="text-white">dfhd fbhv gfhg hdj sjdfh jiervtun kcmeerhgv hfjkfhv kdghu vkdahffcn hgbhj hjkfdvb gjk fhgdh sfgkhfd jkhgj fkdsb gkbh sdjgh jskd</p>
                            
                        </div>

                        <div className='col-md-4 '>
                            <h6>Quick Links</h6>
                            <hr/>
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/">About</Link></div>
                            <div><Link to="/">Contact</Link></div>
                            <div><Link to="/">Blog</Link></div>
                            
                            
                        </div>

                        <div className='col-md-4 '>
                            <h6>Contact Information</h6>
                            <hr/>
                            <div><p className="text-white mb-1">jgjfhbsjkgfjkd</p></div>
                            <div><p className="text-white mb-1">+91 xxxxxxx</p></div>
                            <div><p className="text-white mb-1">+84 xxxxxx</p></div>
                            <div><p className="text-white mb-1">fgdghjd@gmail.com</p></div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
    );
}

export default Footer;