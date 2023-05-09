import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  VStack,
  Image,
  Box,Heading
} from "@chakra-ui/react";

import {useSelector,useDispatch,shallowEqual} from 'react-redux'
import { postData } from "../Reducer/action";
const initState={
    image: "",
    professionalInput: "",
    experienceInput: "",
    locationInput: "",
    feeInput: "",
    name:""
  }
export function Admin() {
  const [formData, setFormData] = useState(initState);
  const [formError, setFormError] = useState("");
   const {isLoading,isError}=useSelector((state)=>{
    return {
        isLoading : state.loading,
        isError:state.error
    }
   },shallowEqual);
   const dispatch=useDispatch()
  const handleInputChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey sagar");
    dispatch(postData(formData))
    setFormData(initState)
  };

  return (
    <Box
    // bgGradient="linear(to-r, teal.500, blue.500)"
      minH="50vh"
      w={"50%"}
      py={12}
      m="auto"
      px={{ base: 4, lg: 8 }}
    >
      <form onSubmit={handleSubmit}>
        <VStack
          spacing={4}
          align="stretch"
          bg="white"
          p={6}
          rounded="md"
          boxShadow="md"
        //   bgGradient="linear(to-t, #cfd9df, #e2ebf0)"
        >

<Heading size="xl" mb={4} textAlign="center" color="black">
          ADD DOCTOR
        </Heading>

        <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>


          <FormControl isRequired>
            <FormLabel>Professional</FormLabel>
            <Input
              type="text"
              name="professionalInput"
              value={formData.professionalInput}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Experience</FormLabel>
            <Textarea
              name="experienceInput"
              value={formData.experienceInput}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Location </FormLabel>
            <Input
              type="text"
              name="locationInput"
              value={formData.locationInput}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Fee</FormLabel>
            <Input
              type="number"
              name="feeInput"
              value={formData.feeInput}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input type="text" onChange={handleInputChange}
            name="image"
            value={formData.image}
           
            />
    
          </FormControl>

          {formError && (
            <FormErrorMessage color="red.500">{formError}</FormErrorMessage>
          )}

          <Button
            type="submit"
            colorScheme="blue"
            px={8}
            py={4}
            fontSize="md"
            fontWeight="bold"
            rounded="full"
            bgGradient="linear(to-r, blue.400, teal.300)"
            _hover={{
              bgGradient: "linear(to-l, blue.400, teal.300)",
            }}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
