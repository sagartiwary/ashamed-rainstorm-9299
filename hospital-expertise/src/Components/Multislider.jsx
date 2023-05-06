import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import Card, { card } from "./Card";
import styled from "styled-components";

export default class Multislider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <Box
          className={className}
          style={{ ...style, display: "block", background: "blue" }}
          onClick={onClick}
          width={"100px"}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <Box
          className={className}
          style={{ ...style, display: "block", background: "blue" }}
          onClick={onClick}
        />
      );
    }
    const images = [
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-1.6befede3.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-3.eeed1ea0.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-2.bcd2bdc9.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-4.5e130b77.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-6.51626a1a.png",
    ];
    const images2 = [
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-5.7a1ab607.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-4.c31332e5.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-3.faf3a8b9.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-1.f17a3332.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-7.c81b7b95.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-8.c4cbe33a.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png",
      "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-6.aa7d1cba.png",
    ];
    
    
    return (
        <DIV>
      <Box width={"100%"}>
        <Box>
          <Text textAlign={"left"} ml="5" fontSize={"2xl"} as={"h3"}>
            CategoriesHealth condition
          </Text>{" "}
          <Slider {...settings}>
            {images.map((i) => (
              <Box p={3}>
                <Image className="img" src={i} alt="al" />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box mt={10}>
          <Text textAlign={"left"} ml="5" fontSize={"2xl"} as={"h3"}>
            Categories
          </Text>
          <Slider {...settings}>
            {images2.map((i) => (
              <Box p={3}>
                <Image className="img" src={i} alt="al" />
              </Box>
            ))}
          </Slider>
        </Box>
       <PauseOnHover/>
      </Box>
      </DIV>
    );
  }
}


export  class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };


    return (
      <Box mt={[6,6,6,10]} mb={10}>
      
        <Slider {...settings}>
           { card.map((i)=><Card {...i}/>)}
        </Slider>
      </Box>
    );
  }
}
const DIV=styled.div`
.img:hover
{
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1.1);
    overflow: hidden;
}
`