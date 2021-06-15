import React, { useState, useEffect } from 'react'
import  {AiOutlineSearch} from 'react-icons/ai'
import Photo from './Photo'
import Logo from './Logo'
import Contact from './Contact.js'

// UNSPLASH ID : https://api.unsplash.com/photos/?client_id=DTSqcZDwgbEPL9gGwIt8ppzUFEZLMFwsQZVHV80q6IA

 const mainUrl = "https://api.unsplash.com/photos/"
 const SearchUrl = "https:/api.unsplash.com/search/photos/"
 const clientID = '?client_id=DTSqcZDwgbEPL9gGwIt8ppzUFEZLMFwsQZVHV80q6IA';


 const App = () => {
   const [loading,SetLoading] = useState(false)
   const [photos,setPhotos] = useState([])
   const [page,setPage] = useState(1)
   const[search,setSearch]= useState('')
   const fetchImages = async() =>{
     SetLoading(true)
     let url
     const pageUrl = `&page=${page}`
     const queryUrl = `&query=${search}`
     if(search){
        url = `${SearchUrl}${clientID}${pageUrl}${queryUrl}`
     }else{
       url  = `${mainUrl}${clientID}${pageUrl}`
     }
     try {
       const response = await fetch(url);
       const data = await response.json()
       setPhotos((oldphotos)=>{
         if(search && page===1){
           return data.results
         }
         else if(search){
            return[...oldphotos ,...data.results]
         }
         else{
          return[...oldphotos,...data]
          
         }
         
       })
     } catch (error) {
       SetLoading(false)
       console.log(error) 
     }
   }
  useEffect(() => {
    fetchImages()
    // eslint-disable-next-line 
  },[page])
  
  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
      if((!loading&& window.innerHeight+window.scrollY)>=document.body.scrollHeight-200){
        setPage((oldPage)=>{
          return oldPage+1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line 
  },[])
  const handleSubmit = (e) =>{
     e.preventDefault();;
     setPage(()=>1)
     fetchImages();
     
  }
  return (
    <main>
      <section>
        <header>
          <Logo/>
        <form>
        <div className='search-box col-md-12'>
        <button type= 'submit' onClick={handleSubmit}>
       < AiOutlineSearch/>
        </button>
        <input type='text' className='search-input' placeholder='Search for anything' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      </form>
          <Contact/>
        </header>
      
        <section>
          <div>
            {photos.map((image,index) =>{
               console.log(photos)
                return <Photo key={index}{...image}/>
            }
            )}
          </div>
          {loading && <center><h1 className='loading'>Loading...</h1></center>}
        </section>
      
      </section>
      
    </main>
  )
}

export default App;