// src/components/Navbar.jsx
import './navbar.css';

function Navbar(){
  return (
   <nav>
    <div className='nav-container'>
      
        <h3 className='name'>Ejaz Ahmad</h3>
        <ul >
          
            <li><a href="">About</a></li>
            <li><a href="#skill">Skills</a></li>
           <li><a href="#projeect">Projects</a></li>    
            <li><a href="">Education</a></li>
            <li><a href="">Contact</a></li>
            
           
        </ul>
         <button className='btn1'>Github Profile</button>
         
        
    </div>

   </nav>
  );
};
export default Navbar; 



