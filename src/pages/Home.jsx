import { useState ,useEffect } from "react"
import Moviecard from "../components/Moviecard"
import { searchMovies,getpopularmovies } from "../service/api"




export default function Home(){
     const [searchQuery,setsearchquery]=useState("")
     const [movies,setmovies]=useState([])
     const [error,seterror]=useState(null)
     const [loading,setloading]=useState(true)

     useEffect(()=>{
          const loadpopularMovies=async ()=>{
               try{
                    const popularMovies = await getpopularmovies()
                    setmovies(popularMovies)
               }catch(err){
                    console.log(err)
                    seterror("Failed to load movies....")
               }finally{
                    setloading(false)

               }
          }
          loadpopularMovies()
     },[])


     const handleSearch= async (event)=>{
          event.preventDefault()
          if(!searchQuery.trim())return
          if (loading) return
          setloading(true)
          try { const searchReasults = await searchMovies(searchQuery)
               setmovies(searchReasults)
               seterror(null)
               
          } catch (error) {
               console.log(error)
               seterror("failed to search movies...")
          }finally{
               setloading(false)
          }


     }

     return<div className="home">
          <form onSubmit={handleSearch} className="search-form">
               <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery}
               onChange={e=>setsearchquery(e.target.value)} />
               <button type="submit" className="search-button">Search</button>
          </form>


          {error && <div className="error-message">{error}</div>}

          {loading ? <div className="loading">Loading...</div> :<div className="movies-grid">
               {movies.map((el)=>{
                    return el.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <Moviecard movie={el} key={el.id}/>
               })}
          </div>}
          

     </div>
}