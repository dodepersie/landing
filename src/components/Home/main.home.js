import Intro from './intro.home'
import Content from './content.home'
import Footer from '../Layouts/footer.layouts' 
import Differenttitle from '../Utilities/Differenttitle'

const Home = () => {
    Differenttitle("Mahadi Saputra: Beranda")

    return (
        <>
            <div className='headerImg'>
                <Intro />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default Home