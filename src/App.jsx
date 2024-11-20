
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'

function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Nuestros productos" />} />
        <Route path="/category/:idCategory" element={<ItemListContainer greeting="Nuestros productos" />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
