import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer user-select-none'>
            <div className='container'>
                <div className='row'>
                    <div className='col my-2'>
                        <div className='d-flex justify-content-center align-items-start float-md-start'>
                            <span>&copy; v1.mahadisaputra.my.id @ { currentYear }</span>
                        </div>
                    </div>
                    <div className='col my-2'>
                        <div className='d-flex justify-content-center align-items-center float-md-end'>
                            <button type="button" className='btn btn-primary me-1'>
                                <a href="https://www.facebook.com/DodePersie" className="text-white">
                                <FontAwesomeIcon icon={ faFacebookF } />
                                </a>
                            </button>
                            <button type="button" className='btn btn-primary me-1'>
                                <a href="https://instagram.com/mahadisptr" className="text-white">
                                <FontAwesomeIcon icon={ faInstagram } />
                                </a>
                            </button>
                            <button type="button" className='btn btn-dark'>
                                <a href="https://github.com/DodePersie" className="text-white">
                                <FontAwesomeIcon icon={ faGithub } />
                                </a>
                            </button>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer