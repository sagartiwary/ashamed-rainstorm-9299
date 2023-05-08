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
import { PATCHdoctor } from "../Redux/doctorappoinment/action";
export default function SelectedDoctor() {
  const [selectdoc, setselectdoc] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();
  const data1 = useSelector((store) => store.doctorreducer);
  const doctordata = data1.doctors;
  console.log(doctordata, "no rander");

  
  useEffect(() => {
    const filter = doctordata.filter((doc) => doc.id == id);
    setselectdoc(filter[0]);
    dispatch(getdoctor);
  }, []);
  useEffect(() => {
  }, []);

  return (
    <Box width={"100%"}>
      <Navbar />
      <Flex
        gap={"10px"}
        m={10}
        direction={["column", "column", "row", "row"]}
        p={10}
      >
        <Box width={"100%"} justifyContent={"center"}>
          <DoctorProfile {...selectdoc} />
        </Box>
        <Box width={"100%"}>
          <AppointmentForm data={selectdoc} />
        </Box>
      </Flex>
    </Box>
  );
}

const AppointmentForm = ({ data }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    message: "",
    mode: "Patient Details",
  });
  const { doctor, timeslote } = useSelector((store) => store.collectreducer);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const bookeddate = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    if ((!timeslote=="" )  && (! formData.name=="") && (! formData.gender=="") && (! formData.age=="") && (! formData.message=="") && (! formData.email=="") && (! formData.phone=="")) {
      if (data.timeslote) {
        console.log(data, "----------------------");
        const status = data.timeslote.status;
        const timesappoinment = data.timeslote.time;

        console.log(status, timesappoinment);

        for (let i = 0; i < status.length; i++) {
          console.log(status[i], timesappoinment[i], "----------------------");
          if (status[i] == "true") {
            bookeddate.push(timesappoinment[i]);
          }
        }
        console.log(bookeddate, timeslote);
        dispatch(postpatient({ ...formData, doctor, timeslote }));

        const maped = bookeddate.map((i, index) => {
          if (i == timeslote) {
            status[index] = !status[index];
          }
          return status[index];
        });
        console.log(maped, "--------------------maped");
        toast.success("Success Appointment Created");

        dispatch(
          PATCHdoctor(data.id,{timeslote: {
            time: [
              "9:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "4:00",
              "5:15",
              "7:00",
            ],
            status: maped,
          }})
        );
      } else {
        toast.error("Fill All Details and Select slot");
      }
    } else {
      toast.error("Fill All Details and Select slot");
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
      <ToastContainer />
      <Box>
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            isRequired
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
            isRequired
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
            isRequired
          />
        </FormControl>
        <FormControl id="gender" mb="4">
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select your gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            isRequired
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
            isRequired
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
            isRequired
          />
        </FormControl>
      </Box>
      <Button colorScheme="blue" size="lg" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};
