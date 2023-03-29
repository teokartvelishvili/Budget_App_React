import './Layout.css';
import Header from '../Header/Header';


const Layout = (props) => {
    return(
        <div className="wraper">
            <Header /> 
            {props.children}
        </div>
    )
}

export default Layout;