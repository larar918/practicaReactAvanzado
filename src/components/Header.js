import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../pages/auth/service';
import { authLogout } from '../store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import '../styles/components.css';

function Header(){
    const isLogged = useSelector(state => state.auth);
    

    const dispatch = useDispatch();
    const navigate= useNavigate();
    const location = useLocation();
    const isOnNewAdvertPage = location.pathname === '/adverts/new';

    const onLogout = () => {
        dispatch(authLogout());
    }
   
    const handleLogOut = async ()=> {
        await logout();  // viene de service.js, elimina el token de localstorage y de axios cliente
        onLogout(); // cambiamos el estado isLogged a false
        navigate('/login');
    }

    return (
        <header>
            <div>
                <nav className='navbar'>
                    <Link to='/adverts' className="navbarContent">NodePop</Link>
                    <div className='options'>
                        <div className='left-options'>
                            {isLogged && !isOnNewAdvertPage && (
                                <Link to='/adverts/new' className="submit navbar-button">Crear anuncio</Link>
                            )}
                        </div>
                        {isLogged && (
                            <button onClick={handleLogOut} className="submit navbar-button" disabled={false}>Log Out</button>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;