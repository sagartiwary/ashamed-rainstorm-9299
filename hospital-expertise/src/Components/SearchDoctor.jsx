


import { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  SimpleGrid,
  Center,Image
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

export function SearchDoctor() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [locations, setLocations] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationInputChange = (e) => {
    setLocationQuery(e.target.value);
  };

  const handleSearchDoctors = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/data?q=${searchQuery}`
      );
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchLocations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/data?q=${locationQuery}`
      );
      setLocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="600px" mx="auto" mt={8}>
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
        />
        <Input
          type="text"
          placeholder="Search for doctors, specialties, and more"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Button colorScheme="teal" ml={2} onClick={handleSearchDoctors}>
          Search
        </Button>
      </InputGroup>

      <InputGroup size="lg" mt={4}>
        <InputLeftElement
          pointerEvents="none"
        //   children={<LocationIcon color="gray.400" />}
        />
        <Input
          type="text"
          placeholder="Location"
          value={locationQuery}
          onChange={handleLocationInputChange}
        />
        <Button colorScheme="teal" ml={2} onClick={handleSearchLocations}>
          Search
        </Button>
      </InputGroup>

      <Box mt={8}>
        {doctors.length > 0 && (
          <>
            <Center mb={4}>
              <Box fontWeight="bold" fontSize="xl">
                Doctors
              </Box>
            </Center>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {doctors.map((doctor) => (
                <Box key={doctor.id} p={4} bg="white" rounded="md" shadow="md">
                    <Image w={"100%"} src={doctor.image}/>
                  <Box fontWeight="bold">{doctor.name}</Box>
                  <Box>{doctor.professionalInput}</Box>
                  <Box>{doctor.locationInput}</Box>
                </Box>
              ))}
            </SimpleGrid>
          </>
        )}

        {locations.length > 0 && (
          <>
            <Center mt={8} mb={4}>
              <Box fontWeight="bold" fontSize="xl">
                Locations
              </Box>
            </Center>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {locations.map((location) => (
                <Box key={location.id} p={4} bg="white" rounded="md" shadow="md">
                  <Box fontWeight="bold">{location.name}</Box>
                  <Box>{location.professionalInput}</Box>
                  <Box>{location.locationInput}</Box>
                  {/* <Box>{doctor.locationInput}</Box> */}
            </Box>
          ))}
        </SimpleGrid>
      </>
    )}
  </Box>
</Box>)}
