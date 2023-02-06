import { Link } from 'react-router-dom'
import { NavSection, Wrapper } from './Navbar.styles'

const Navbar = () => {
    return (
        <Wrapper>
            <NavSection>
                <Link to="/" >
                    Home Page
                </Link>
                <Link to="/add-users" >
                    Add User
                </Link>
                <Link to="/settings" >
                    Settings
                </Link>
                <Link to="/logout" >
                    Logout
                </Link>
            </NavSection>
        </Wrapper>
    )
}

export default Navbar