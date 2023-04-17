import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'

const Navigationbar = () => {

    return (
        <>
        <div>
            <header>
            <Navbar className='pt-3 pb-3 user-select-none navbar-default' variant='light' expand='lg' fixed='top'>
                <Container>
                    <Navbar.Brand><FontAwesomeIcon icon={faUserNinja} className='me-3'/>Mahadi Saputra</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className='justify-content-end flex-grow-1 pe-3'>
                        <NavLink
                        to="/"
                        style={({ isActive }) => ({
                        color: isActive ? '#0dad8e' : '#000',
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bolder' : 'normal',
                        })} className='p-2'
                        >
                            Beranda
                        </NavLink>
                        <NavLink
                        to="/tentang"
                        style={({ isActive }) => ({
                        color: isActive ? '#0dad8e' : '#000',
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bolder' : 'normal',
                        })} className='p-2'
                        >
                            Tentang saya
                        </NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </header>
        </div>
        </>
    )
}

export default Navigationbar