  
import { Box, Heading,Text } from '@chakra-ui/react';
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
    <Box w="450px" margin={"auto"} h="200px" mt="70px" mb="50px">
        <Heading as="h4" size="lg">What our users have to say
       </Heading>
        <Slider {...settings}>
          <Box mt="20px">
            <Text textAlign ="center" fontSize="20px">
            Very easy to book, maintain history. Hassle free from older version of booking appointment by telephone.. Thanks Healthcare Hospital for making this easy.
            </Text>
          </Box>
          <Box mt="20px">
            <Text textAlign ="center" fontSize="20px" mt="10px">Very east to book maintain history.Hassle free from older version of booking appointment by telephone. Thanks Health care hospital for making this easy</Text>
          </Box>
          <Box mt="20px">
            <Text fontSize="20px"  textAlign ="center">
            Very good app. Well thought out about booking/resheduling/cancelling an appointment. Also Doctor's feedback mechanism is good and describes all the basics in a good way.
            </Text>
          </Box>
        
        </Slider>
      </Box>
    )
  
}
