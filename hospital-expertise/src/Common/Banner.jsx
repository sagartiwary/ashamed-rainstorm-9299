import React from 'react'
import { Center, Image } from '@chakra-ui/react'
export const Banner = () => {
  return (
    <Center w={{ base: '40%', sm: "60%", md: '85%', lg: '90%' }} m={{ base: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }} mt={{ base: '30px', sm: "30px", md: '20px', lg: '20px' }}>
      <Image src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt="show me your name" />
    </Center>
  )
}
