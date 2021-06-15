import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="contact">
            <Link to ="\about">
             <p>contact <FiPhoneCall style={{fontSize:'2rem',border:"none"}}/></p>
            </Link>
            
        </div>
    )
}

export default Contact
