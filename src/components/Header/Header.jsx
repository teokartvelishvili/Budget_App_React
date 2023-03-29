import './Header.css';
import { Link } from "react-router-dom";



const Header = () => {
    return(
        // <Link to={"/add-expense"}>Add Expense</Link>
        <div className='Header'>
            <div>
        <Link to={"/"}>
            მთავარი
        </Link>
        </div>
        <div>
        <Link to={"/add-expense"}>
            დამატება
        </Link>
        </div>
        <div>
        <Link to={"/signup"}>  
            რეგისტრაცია
            </Link>  </div>
        <div>
        <Link to={'/signin'}>
            შესვლა
            </Link>

            </div>
            
        
        </div>
    ); 
} 


export default Header;