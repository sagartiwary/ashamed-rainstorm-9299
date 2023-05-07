import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
export const Banner = () => {
  return (
    <Box m="10px" marginTop={"10px"}>
    <Center boxSizing="border-box" width={"-moz-fit-content"} maxH={"400px"} maxW={"100%"}>
      <Image width={"100%"} src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt="show me your name" />
    </Center></Box>
  )
}
