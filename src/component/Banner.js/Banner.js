import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="bannerOne">
        <div>
            <div>
              <h2 className="text-8xl text-white font-bold">
                Industry <br /> Solutions!
              </h2>
              <p className="text-lg text-white font-semibold mt-9">
                To further develop our corporate strengths we have <br />{" "}
                established a corporate mandate to maintain strong core <br />{" "}
                values that truly reflect the companys philosophy.
              </p>
            </div>
            <div className="flex justify-evenly items-center mt-11">
              <button className="bg-white text-black py-3 px-14 font-semibold mr-56 cursor-pointer hover:text-white hover:bg-orange-500 hover:font-semibold">
                Our Service
              </button>
              <div>
                <div>
                  <p className="text-white font-medium mb-4">Our Video</p>
                  <div className="play-button">
                    <FaPlayCircle></FaPlayCircle>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-60 bg-white flex flex-col items-center py-3">
            <div>
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/258/258406.png"
                alt=""
              />
            </div>
            <div className="mt-8">
              <p className="text-xl font-medium">Our Mission</p>
              <p className="text-sm font-medium mt-4">
                Utilizing latest processing <br /> solutions, and decades of <br /> work
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="bannerTwo">
          <div>
            <div>
              <h2 className="text-8xl text-white font-bold">
                Industry <br /> Solutions!
              </h2>
              <p className="text-lg text-white font-semibold mt-9">
                To further develop our corporate strengths we have <br />{" "}
                established a corporate mandate to maintain strong core <br />{" "}
                values that truly reflect the companys philosophy.
              </p>
            </div>
            <div className="flex justify-evenly items-center mt-11">
              <button className="bg-white text-black py-3 px-14 font-semibold mr-56 cursor-pointer hover:text-white hover:bg-orange-500 hover:font-semibold">
                Our Service
              </button>
              <div>
                <div>
                  <p className="text-white font-medium mb-4">Our Video</p>
                  <div className="play-button">
                    <FaPlayCircle></FaPlayCircle>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-60 bg-white flex flex-col items-center py-3">
            <div>
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/416/416212.png"
                alt=""
              />
            </div>
            <div className="mt-8">
              <p className="text-xl font-medium">Our Mission</p>
              <p className="text-sm font-medium mt-4">
                Utilizing latest processing <br /> solutions, and decades of <br /> work
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="bannerThree">
        <div>
            <div>
              <h2 className="text-8xl text-white font-bold">
                Industry <br /> Solutions!
              </h2>
              <p className="text-lg text-white font-semibold mt-9">
                To further develop our corporate strengths we have <br />{" "}
                established a corporate mandate to maintain strong core <br />{" "}
                values that truly reflect the companys philosophy.
              </p>
            </div>
            <div className="flex justify-evenly items-center mt-11">
              <button className="bg-white text-black py-3 px-14 font-semibold mr-56 cursor-pointer hover:text-white hover:bg-orange-500 hover:font-semibold">
                Our Service
              </button>
              <div>
                <div>
                  <p className="text-white font-medium mb-4">Our Video</p>
                  <div className="play-button">
                    <FaPlayCircle></FaPlayCircle>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-60 bg-white flex flex-col items-center py-3">
            <div>
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/224/224113.png"
                alt=""
              />
            </div>
            <div className="mt-8">
              <p className="text-xl font-medium">Our Mission</p>
              <p className="text-sm font-medium mt-4">
                Utilizing latest processing <br /> solutions, and decades of <br /> work
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
