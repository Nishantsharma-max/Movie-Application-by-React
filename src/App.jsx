
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorite/>}/>
      </Routes>
    </main>
  )
}

export default App
