import Banner from '../components/Banner';
import '../styles/home.css';
import bannerHome from "../assets/banner_home.png"

function Home(){
    return (<div className="main" >
     <Banner urlImg={bannerHome} texte="Chez vous, partout et ailleurs"/>
    </div>)
}

export default Home;