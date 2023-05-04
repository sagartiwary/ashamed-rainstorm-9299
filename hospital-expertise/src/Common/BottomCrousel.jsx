






  
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

export const BottomCrousel = () => {
    let data=[
        {
            title : " Very easy to book, maintain history. Hassle free from older version of booking appointment by telephone.. Thanks Healthcare Hospital for making this easy."
           
        },
    
        {
            title :"Very east to book maintain history.Hassle free from older version of booking appointment by telephone. Thanks Health care hospital for making this easy"
        },
        {
            title :"Very good app. Well thought out about booking/resheduling/cancelling an appointment. Also Doctor's feedback mechanism is good and describes all the basics in a good way."
        }
    
    ]
     
  return (
    <Box>
        <Heading as="h4" size="lg">What our users have to say
       </Heading>
        <Slider {...settings}>
          <Box>
            <h3>1</h3>
          </Box>
          <Box>
            <h3>2</h3>
          </Box>
          <Box>
            <h3>3</h3>
          </Box>
        
        </Slider>
      </Box>
    )
  
}
