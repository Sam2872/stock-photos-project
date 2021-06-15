import React ,{useState}from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import{AiOutlineHeart} from 'react-icons/ai'


const PhotoDetails = () => {
    const {id} = useParams()
    const clientID = '?client_id=DTSqcZDwgbEPL9gGwIt8ppzUFEZLMFwsQZVHV80q6IA';
    const url = `https://api.unsplash.com/photos/${id}/${clientID}`
    const [details, setdetails] = useState([])
    const fetchphoto = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setdetails([data])
        console.log(details)
    }
    React.useEffect(()=>{
        fetchphoto()
         // eslint-disable-next-line
    },[])
    return (
        <div className='bg' >
            {details.map((person)=>{
                const {likes,
                urls:{large,small},
                description,user:{username,portfolio_url},
                profile_image, alt_description}= person
                return(
                  <main className='pic-details col-md-11'>
                     <section className='detail-box col-md-6'>
                        <img src={large||small} alt={alt_description}></img>
                        <div className='img-text'>
                        </div>
                    </section>
                    <article className='col-md-6 img-details text-center'>
                        <h1 style={{borderBottom:"1px solid grey",color:'#2C2D5F'}}>INFO:</h1>
                        <h2>By: <a href={portfolio_url} className='username'>
                             {username} 
                            </a></h2>
                        <h2 style={{display:'flex',alignItems:'center',justifyContent:'center',color:'#ff6666'}} ><b>{`Likes : ${likes}`}</b><AiOutlineHeart /></h2>
                       {alt_description? <h2>{`Description:${alt_description}`}</h2>: <h2 >NO description needed! The picture speaks for itself.
                       </h2> }
                       <Link to = '/'>
            
                    <button className='bton col-md-12 ' >
                        Back Home
                    </button>
                    </Link>
                    </article>
                  </main>
                    
                )
            })}
        </div>
    )
}

export default PhotoDetails
