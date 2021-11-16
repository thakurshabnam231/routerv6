import {Fragment} from 'react'
import { Route,Routes,Navigate} from 'react-router-dom'
import Login from './pages/Login';
import About from './pages/About';
import MainHeader from './components/MainHeader';
import Product from './pages/Product'
function App() {
  return (
  <Fragment>
  <MainHeader/>
      <Routes>
      <Route path='/' element={<Navigate to='/about'/>}/>
      
     <Route path='/about' element={<About/>}/>
     <Route path='/product/*' element={<Product/>}>
    //nested routes
     <Route path="new-product" element={<p>welcome to new products</p>}/>
     </Route>
         
   <Route path='/login' element={<Login/>}/>
        
      </Routes>
</Fragment>
  
  );
}

export default App;
