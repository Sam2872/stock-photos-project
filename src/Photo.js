import React from 'react'
import {Link} from 'react-router-dom'

const Photo = ({urls:{regular},
     alt_description,
     id,
    likes,
     user:{
         name,
         profile_image:{medium}
     } }) => {
    return (
        <Link to={`/details/${id}`}>
          
        <article className='col-md-4 photo '>
            <img src={regular} alt={alt_description}/> 
             <div className ='photo-info'>
               <div>
                   <h4>{name}</h4>
                   <p>{likes}</p>
               </div>
               <div className='prof'>
                  <img src ={medium} alt={alt_description} className="prof-img"/>
               </div>
             </div>
        </article>
        </Link>
        
    )
}

export default Photo
