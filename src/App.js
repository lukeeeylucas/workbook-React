import { Switch, Route, Redirect} from 'react-router-dom';

import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import HomePage from './pages/HomePage';
import Layout from './Components/Home_Components/Layout';
import PageNotFound from './pages/PageNotFound';
import Footer from './Components/Home_Components/Footer';
import Users from './Components/Login/Users';
import WorkbookDisplay from './Components/Workbook/WorkbookDisplay';


function App() {
  
  return (
  <div>

<Layout>
   
     <Switch >
       <Route path = '/' exact>
          <Redirect to = '/home' />
       </Route>

       <Route path = '/home' exact>
           <HomePage />
       </Route>

       <Route path = '/users'>
           <Users/>
       </Route>

       <Route path = '/login'>
           <Login />
       </Route>

       <Route path = '/signup' >
           <Signup />
       </Route>

       <Route path = '/create' >
           <WorkbookDisplay />
       </Route>

       <Route path = '*'>
           <PageNotFound />
       </Route>

     </Switch>
     
   
   </Layout>
   <Footer/>

    </div>
    
  );
}

export default App;
