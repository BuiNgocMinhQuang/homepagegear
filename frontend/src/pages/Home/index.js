import "./index.scss";
import "../../components/GlobalStyles/GlobalStyle.scss";
import image1 from "../../assets/images/image-home.jpeg";
import Button from "react-bootstrap/Button";
import "./Carousel";
import CarouselContainer from "./Carousel";
import MenuBody from "./MenuBody";
import Review from "./Review";
import Service from "./Service";
import BannerBottom from "./BannerBottom";
function Home() {
  return (
    <div className="homepage">
      <CarouselContainer />
      <MenuBody />
      <Review />
      <BannerBottom />
      <div className="container-default">
        <Service />
      </div>
    </div>
  );
}

export default Home;
