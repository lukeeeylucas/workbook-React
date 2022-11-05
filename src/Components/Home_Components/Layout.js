import Particles from 'react-particles-js';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation'; 

const Layout = (props) =>{
    const particlesOptions = {
        particles: {
          number: {
            value: 50,
            density: {
              enable: false,
              value_area: 500
            
            }
          }
        }
      }
    return (
        <div> 
          <MainNavigation />        
            <main className={classes.main}>{props.children}</main>
            <Particles className='particles'
              params={particlesOptions}
            />
        </div>

    );

}

export default Layout;