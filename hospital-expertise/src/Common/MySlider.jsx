


import React from 'react';
import Slider from 'react-slick';
import {Box,Flex,Image,Text} from '@chakra-ui/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let data = [
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
        prop: "Dentist",
        title: "toothing troubles?Schedule a dental checkup"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
        prop: "Gynecologist/Obsetrician",
        title: "Explore for women's health,pregnancy and infertility treatments"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
        prop: "Dietition/Nutrition",
        title: "Get guidance on eating right, weight management and sports nutrition"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
        prop: "Physiotherapist",
        title: "Pulled a muscle? Get it treated by a trained physiotherapist"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
        prop: "General surgeon",
        title: "Need to get operated? Find right surgeon"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
        prop: "Orhopedist",
        title: "For Bone and joints issues, spinal injuries and more"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
        prop: "General physician",
        title: "Find the right family doctor in your neighbourhood."
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg",
        prop: "Pediatrician",
        title: "Child Specialists and Doctors for infant"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg",
        prop: "Gastroenterologist",
        title: "Explore for issue related to digestive system, liver and pancreas"
    },

]


const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear"
};
export const MySlider = () => {
    return (
        <Box w="90%" margin="auto">
            <Slider {...settings}>
                <Flex alignItems="center" justify="space-between" mb="5">
                    
                    {
                        data.map((ele) => {
                            return <Box maxW="420px" key={ele.title}>
                                <Box>
                                    <Image src={ele.image} alt={ele.title} w="400px" mr="4" margin="auto" />
                                </Box>


                                <Box mt="2">
                                    <Text fontSize="sm" color="gray.600" textAlign='center' p="2px">
                                        {ele.prop}
                                    </Text>
                                    <Text fontSize="14px">{ele.title}</Text>
                                </Box>
                            </Box>
                        })
                    }
                </Flex>
            </Slider>

        </Box>

    )
}


