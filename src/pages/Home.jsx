import { useState } from "react"
import Moviecard from "../components/Moviecard"
export default function Home(){
     const [searchQuery,setsearchquery]=useState("")
     let movies=[
          {id:1,title:"john wick",release_date:2020},
          {id:2,title:"Terminator",release_date:1990},
          {id:3,title:"the Matrix",release_date:1998}
     ]
     // const [movie,setmovie]=useState(movies)
     const handleSearch=(event)=>{
          event.preventDefault()
          // setmovie(movie.filter((el)=>{
          //      return !(searchQuery!=el.title)
          // }))

     }

     return<div className="home">
          <form onSubmit={handleSearch} className="search-form">
               <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery}
               onChange={e=>setsearchquery(e.target.value)} />
               <button type="submit" className="search-button">Search</button>
          </form>
          <div className="movies-grid">
               {movies.map((el)=>{
                    return el.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <Moviecard movie={el} key={el.id}/>
               })}
          </div>

     </div>
}