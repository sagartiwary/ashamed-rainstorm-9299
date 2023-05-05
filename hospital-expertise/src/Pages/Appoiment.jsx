import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Select, FormControl, FormLabel, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CalendarCom from "./Calender";
import { InputCompo } from "./InputCompo";
import Navbar from "../Components/Navbar";

export const Appoiment = () => {
  return (
    <Box>
      <Navbar />
      <Box >
        <Box m={5} > <Heading>Book Appointment</Heading></Box>

       
      </Box>
      <Text as={"sub"}>{""}</Text>
      <Flex
        width={"100&"}
        justifyContent={"space-evenly"}
        margin={1}
        border={"1px solid red"}
      >
        <Flex
          as="flex"
          width={"40%"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid red"}
        >
          <CalendarCom />
        </Flex>
        <Box width={"40%"}>
          <Image
            width={"100%"}
            src="https://th.bing.com/th/id/OIP.mWnJcZgzOjHemm1IvFqh3gHaGY?pid=ImgDet&w=1800&h=1552&rs=1"
            alt="doctor"
          />
        </Box>
      </Flex>
      <Box width={"100%"}  border={"1px solid red"} boxSizing="border-box">
        <Flex
        
          justifyContent={"space-between"}
          width={"100%"}
          boxSizing="border"
        >
        <Box width={"100%"}>  <InputCompo /></Box>
        
          <Box width={"100%"}>
            <AppointmentForm />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const todaydate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  return today;
};
console.log(todaydate());

function AppointmentForm() {
  const [doctor, setDoctor] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Appointment scheduled with ${doctor} on ${day} at ${time} for ${specialty}`
    );
    // send form data to server or perform other actions here
  };

  const selectVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="doctor" isRequired mb={4}>
        <FormLabel>Doctor:</FormLabel>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={selectVariants}
        >
          <Select
            placeholder="Select a doctor"
            value={doctor}
            onChange={handleDoctorChange}
            size="lg"
          >
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </Select>
        </motion.div>
      </FormControl>
      <FormControl id="day" isRequired mb={4}>
        <FormLabel>Day:</FormLabel>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={selectVariants}
        >
          <Select
            placeholder="Select a day"
            value={day}
            onChange={handleDayChange}
            size="lg"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </Select>
        </motion.div>
      </FormControl>
      <FormControl id="time" isRequired mb={4}>
        <FormLabel>Time:</FormLabel>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={selectVariants}
        >
          <Select
            placeholder="Select a time"
            value={time}
            onChange={handleTimeChange}
            size="lg"
          >
            <option value="9:00 AM">9:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </Select>
        </motion.div>
      </FormControl>
      <FormControl id="specialty" isRequired mb={4}>
        <FormLabel>Specialty:</FormLabel>
        <motion.div initialanimate="visible" variants={selectVariants}>
          <Select
            placeholder="Select a specialty"
            value={specialty}
            onChange={handleSpecialtyChange}
            size="lg"
          >
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Endocrinology">Endocrinology</option>
            <option value="Gastroenterology">Gastroenterology</option>
            <option value="Neurology">Neurology</option>
          </Select>
        </motion.div>
      </FormControl>
      <Flex justify="center">
        <motion.button
          type="submit"
          bg="blue.500"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          px={12}
          py={6}
          borderRadius="50px"
          boxShadow="lg"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          Schedule Appointment
        </motion.button>
      </Flex>
    </form>
  );
}

export default AppointmentForm;
