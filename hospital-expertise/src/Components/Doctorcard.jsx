import { useState } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const MyCard = ({ name, title, specialist, details, img,id }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleBookAppointment = () => {
    // Implement booking logic here
    console.log(`Booking appointment with ${name}`);
  };

  return (
    <Fade triggerOnce>
      <Box
        width="420px"
        height={["280px"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        boxShadow="base"
        transition="box-shadow 0.3s ease-in-out"
        _hover={{ boxShadow: "md" }}
        display={"flex"}
        gap={-5}
        alignContent={"center"}
      >
        <Image
          src={img}
          alt={name}
          maxH="280px"
          objectFit="cover"
          borderTopRadius="lg"
          maxW={"200px"}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Text
              fontSize="xl"
              fontWeight="semibold"
              mr="2"
              color="gray.800"
              overflowWrap={"break-word"}
              inlineSize={"200px"}
            >
              {name}
            </Text>
            <Text
              fontSize="md"
              color="gray.500"
              overflowWrap={"break-word"}
              inlineSize={"200px"}
            >
              {title}
            </Text>
          </Box>

          <Text mt="2" fontSize="sm" color="gray.600">
            {specialist}
          </Text>

          {showDetails && (
            <Text mt="2" fontSize="sm" color="gray.600">
              {details}
            </Text>
          )}
          <Box>
            <NavLink to={`selectdoctor/${id}`}>
              <Button m={4} colorScheme="teal" onClick={handleBookAppointment}>
                Book Appointment
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default MyCard;
