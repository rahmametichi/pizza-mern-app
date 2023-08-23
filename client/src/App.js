import Navbar from './components/Navbar';
import './App.css';
import Homescreen from './screens/Homescreen';
import'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import 'bootstrap'
import Ordersscreen from './screens/Ordersscreen';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
    <BrowserRouter>
    <Switch><Route exact path='/'><Homescreen/></Route> 
                    <Route exact path='/cart'><Cartscreen/></Route>
                    <Route exact path='/login'><Loginscreen/></Route>
                    <Route exact path='/register'><Registerscreen/></Route>
                    <Route exact path='/orders'><Ordersscreen/></Route>
                    </Switch> 
    </BrowserRouter>
      
    
    </div>
  );
}

export default App;
