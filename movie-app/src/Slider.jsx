import Carousel from "react-bootstrap/Carousel";
import movies from './Movie/movies';

function Slider() {
    return (
        <Carousel>
        <Carousel.Item>
            <img src="./Inception.jpg" width={500} height={750} text="Hello" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./The-Shawshank-Redemption.jpg" width={500} height={750} text=" slide" />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./The-Godfather.jpg" width={500} height={750} text="" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./The-Dark-Knight.jpg" width={500} height={750} text="Third slide" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./Pulp-Fiction.jpg" width={500} height={750} text="Third slide" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./logo192.png" width={500} height={750} text="Third slide" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./logo192.png" width={500} height={750} text="Third slide" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
