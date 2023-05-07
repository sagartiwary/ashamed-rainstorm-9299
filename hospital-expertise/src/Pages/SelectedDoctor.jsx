import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doctorsdata } from "../Components/doctorsdata";
import DoctorProfile from "../Components/DoctorProfile";
import Navbar from "../Components/Navbar";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getdoctor } from "../Redux/patient/action";
import { postpatient } from "../Redux/patientdetails/action";
import { doctorname } from "../Redux/collecter/action";
import { ToastContainer, toast } from "react-toastify";
export default function SelectedDoctor() {
  const [selectdoc, setselectdoc] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();
  const data1 = useSelector((store) => store.doctorreducer);
 const doctordata=data1.doctors
 console.log(doctordata,"no rander")

  const filter = doctordata.filter((doc) => doc.id == id);

  useEffect(() => {
    setselectdoc(filter[0]); 
   
  }, [id]);
  useEffect(() => {
    getdoctor();
   
  }, []);





  return (
    <Box width={"100%"} >
        <Navbar />
      <Flex gap={"10px"}  m={10} direction={["column","column","row","row"]} p={10} >
        <Box width={"100%"} justifyContent={"center"}>
          <DoctorProfile {...selectdoc} />
        </Box>
        <Box width={"100%"}>
          <AppointmentForm />
        </Box>
      </Flex>
    </Box>
  );
}

const AppointmentForm = () => {
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    patientname: "",
    patientemail: "",
    patientphone: "",
    patientgender: "",
    patientage: "",
    message: "",
  });
  const {doctor,timeslote}=useSelector((store)=>store.collectreducer)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if(doctor&&timeslote){
        dispatch(postpatient({...formData,doctor,timeslote}))

    }else{
        toast.warning("Select slote")
    }
    // Add code here to submit the form data to your backend or external service
  };

  return (
    <Box
    
      bg="white"
      borderRadius="md"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
      p="6"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
    <ToastContainer/>
      <Box>
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="phone" mb="4">
          <FormLabel>Phone number</FormLabel>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="gender" mb="4">
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select your gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl id="age" mb="4">
          <FormLabel>Age</FormLabel>
          <Select
            placeholder="Select your age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          >
            <option value="under18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65+">65+</option>
          </Select>
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message (optional)</FormLabel>
          <Textarea
            placeholder="Enter a message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Button colorScheme="blue" size="lg" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};
