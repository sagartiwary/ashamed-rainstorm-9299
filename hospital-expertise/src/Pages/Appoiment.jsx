import { Box, Heading, Image, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Select, FormControl, FormLabel, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Input, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import CalendarCom from "./Calender";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { doctorsdata } from "../Components/doctorsdata";
import { useDispatch } from "react-redux";
import { postpatient } from "../Redux/patientdetails/action";

export const Appoiment = () => {
  const localStoragedata = JSON.parse(localStorage.getItem("date")) || "";
  const [size, setsize] = useState("");
  const [date, setdate] = useState(
    JSON.parse(localStorage.getItem("date")) || ""
  );
  console.log("----------------------", window.screen, size);
  useEffect(() => {
    window.addEventListener("resize", setsize("hi"));
  }, [size]);
  useEffect(
    (res) => {
      setdate(localStorage.getItem("date"));
    },
    [localStoragedata]
  );
  return (
    <Box>
      <Navbar />
      <DIV>
        <Box>
          <ToastContainer />
          <Box m={5}>
            {" "}
            <Heading>Book Appointment</Heading>
          </Box>
        </Box>
        <Text as={"sub"}>{""}</Text>
        <Flex
          width={"100&"}
          justifyContent={"space-around"}
          margin={1}
          direction={["column-reverse", "column-reverse", "row", "row"]}
          alignItems={"center"}
        >
          <Flex
            as="flex"
            width={["100%", "100%", "40%", "40%"]}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CalendarCom />
          </Flex>
          <Box width={["100%", "100%", "40%", "40%"]}>
            <Image
              width={"100%"}
              src={
                window.screen.width >= 800
                  ? [
                      "https://th.bing.com/th/id/OIP.mWnJcZgzOjHemm1IvFqh3gHaGY?pid=ImgDet&w=1800&h=1552&rs=1",
                    ]
                  : "https://hammondtownsend.com/wp-content/uploads/2020/01/5cbf074c950c764e4f89c165_MedicalAppointment.dafc7db6805b5541eb843f4870979680500.jpg"
              }
              alt="doctor"
            />
          </Box>
        </Flex>
        <Box width={"100%"} boxSizing="border-box">
          <Flex justifyContent={"space-around"}>
            <Stack>
              <Heading as={"sub"} fontSize={"xl"} fontFamily={"cursive"}>
                Patiant Details Form
              </Heading>
            </Stack>
          </Flex>
          <Flex>
            <Box width={"100%"}>
              <AppointmentForm date={date} />
            </Box>
          </Flex>
        </Box>
      </DIV>
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

function AppointmentForm({ date }) {
  const [formdata, setdata] = useState({});
  const [doctor, setDoctor] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [reason, setReason] = useState("");
  const [checkupType, setCheckupType] = useState("");
  const [update, setupdate] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleCheckupTypeChange = (event) => {
    setCheckupType(event.target.value);
  };
  const onSubmit = (data) => {
    if (
      doctor == "" ||
      day == "" ||
      time == "" ||
      checkupType == "" ||
      specialty == "" ||
      reason == ""
    ) {
      toast.warning("Please enter all detail");
    } else {
      setdata({ ...data, doctor, day, time, checkupType, specialty, reason });
      dispatch(postpatient({ ...data, doctor, day, time, checkupType, specialty, reason }))
      setupdate(!update);
      toast.success(" Appointment has been Recorded!");
      handleSubmitform();
    }
  };
  let handleSubmitform = () => {
    setdata("");
    setDoctor("");
    setDay("");
    setTime("");
    setSpecialty("");
    setReason("");
    setCheckupType("");
    setupdate("");
    console.log(
      `Appointment scheduled with ${doctor} on ${day} at ${time} for ${specialty}`
    );
    console.log(`Reason: ${reason}`);
    console.log(`Checkup type: ${checkupType}`);
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
  useEffect(() => {
    console.log(formdata);////////////////////////////////////setdata

   
  }, [update]);
  return (
    <Box m={10}>
      <Flex
        direction={["column", "column", "row", "row"]}
        justifyContent={"space-between"}
        width={"100%"}
        gap={10}
        boxSizing="border"
      >
        <Box width={["100%", "100%", "50%", "50%"]} p={5} className="div1">
          <Box>
            <form>
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
                    {doctorsdata.map((doc) => (
                      <option value={doc.name}>{doc.name}</option>
                    ))}
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
                    <option value="7:00 PM">7:00 PM</option>
                  </Select>
                </motion.div>
              </FormControl>
          <FormControl id="specialty" isRequired mb={4}>
                <FormLabel>Specialty:</FormLabel>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={selectVariants}
                >
                  <Select
                    placeholder="Select a specialty"
                    value={specialty}
                    onChange={handleSpecialtyChange}
                    size="lg"
                  >
                 { doctorsdata.map((specialty, index) =><option value={specialty.specialist}>{specialty.specialist}</option>)}
                    
                  </Select>
                </motion.div>
              </FormControl>
              <FormControl id="reason" isRequired mb={4}>
                <FormLabel>Reason:</FormLabel>
                <Textarea
                  placeholder="Enter reason for appointment"
                  value={reason}
                  onChange={handleReasonChange}
                  size="lg"
                />
              </FormControl>
              <FormControl id="checkup-type" isRequired mb={4}>
                <FormLabel>Checkup Type:</FormLabel>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={selectVariants}
                >
                  <Select
                    placeholder="Select checkup type"
                    value={checkupType}
                    onChange={handleCheckupTypeChange}
                    size="lg"
                  >
                    <option value="Fresh checkup">Fresh checkup</option>
                    <option value="Recheckup">Recheckup</option>
                  </Select>
                </motion.div>
              </FormControl>
            </form>
          </Box>
        </Box>
        <Box width={["100%", "100%", "50%", "50%"]} p={5} className="div2">
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing="4">
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <Text color="red.500">This field is required</Text>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.age}>
                  <FormLabel htmlFor="age">Age</FormLabel>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    {...register("age", { required: true, min: 18 })}
                  />
                  {errors.age && errors.age.type === "required" && (
                    <Text color="red.500">This field is required</Text>
                  )}
                  {errors.age && errors.age.type === "min" && (
                    <Text color="red.500">
                      You must be at least 18 years old
                    </Text>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.address}>
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <Input
                    id="address"
                    placeholder="Enter your address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <Text color="red.500">This field is required</Text>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <Text color="red.500">This field is required</Text>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <Text color="red.500">Invalid email address</Text>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.mobile}>
                  <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    {...register("mobile", {
                      required: true,
                      pattern: /^\d{10}$/,
                    })}
                  />
                  {errors.mobile && errors.mobile.type === "required" && (
                    <Text color="red.500">This field is required</Text>
                  )}
                  {errors.mobile && errors.mobile.type === "pattern" && (
                    <Text color="red.500">Invalid mobile number</Text>
                  )}
                </FormControl>
                <Flex gap={"10"} width={"100%"}>
                  <FormControl isInvalid={errors.dob}>
                    <FormLabel htmlFor="dob">Date of Appointment</FormLabel>
                    <Input
                      id="dob"
                      type="date"
                      {...register("dateofappoinment", { required: true })}
                    />
                    {errors.dob && (
                      <Text color="red.500">This field is required</Text>
                    )}
                  </FormControl>
                  <FormControl isInvalid={errors.gender}>
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <RadioGroup defaultValue="1">
                      <Stack
                        direction="column"
                        overflowX={"scroll"}
                        height={"50px"}
                      >
                        <Radio
                          id="male"
                          name="gender"
                          value="male"
                          {...register("gender")}
                        >
                          Male
                        </Radio>
                        <Radio
                          id="female"
                          name="gender"
                          value="female"
                          {...register("gender")}
                        >
                          Female
                        </Radio>

                        <Radio
                          id="others"
                          name="gender"
                          value="others"
                          {...register("gender")}
                        >
                          Others
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    {errors.gender && (
                      <Text color="red.500">This field is required</Text>
                    )}
                  </FormControl>
                </Flex>
                <Flex justify={"center"} p={5} className="btn">
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Text className="btntext">Schedule Appointment</Text>
                  </motion.button>
                </Flex>
              </VStack>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default AppointmentForm;

// export function InputCompo() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Box m={"10"}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <VStack spacing="4">
//           <FormControl isInvalid={errors.name}>
//             <FormLabel htmlFor="name">Name</FormLabel>
//             <Input
//               id="name"
//               placeholder="Enter your name"
//               {...register("name", { required: true })}
//             />
//             {errors.name && <Text color="red.500">This field is required</Text>}
//           </FormControl>
//           <FormControl isInvalid={errors.age}>
//             <FormLabel htmlFor="age">Age</FormLabel>
//             <Input
//               id="age"
//               type="number"
//               placeholder="Enter your age"
//               {...register("age", { required: true, min: 18 })}
//             />
//             {errors.age && errors.age.type === "required" && (
//               <Text color="red.500">This field is required</Text>
//             )}
//             {errors.age && errors.age.type === "min" && (
//               <Text color="red.500">You must be at least 18 years old</Text>
//             )}
//           </FormControl>

//           <FormControl isInvalid={errors.address}>
//             <FormLabel htmlFor="address">Address</FormLabel>
//             <Input
//               id="address"
//               placeholder="Enter your address"
//               {...register("address", { required: true })}
//             />
//             {errors.address && (
//               <Text color="red.500">This field is required</Text>
//             )}
//           </FormControl>
//           <FormControl isInvalid={errors.email}>
//             <FormLabel htmlFor="email">Email</FormLabel>
//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
//             />
//             {errors.email && errors.email.type === "required" && (
//               <Text color="red.500">This field is required</Text>
//             )}
//             {errors.email && errors.email.type === "pattern" && (
//               <Text color="red.500">Invalid email address</Text>
//             )}
//           </FormControl>
//           <FormControl isInvalid={errors.mobile}>
//             <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
//             <Input
//               id="mobile"
//               type="tel"
//               placeholder="Enter your mobile number"
//               {...register("mobile", { required: true, pattern: /^\d{10}$/ })}
//             />
//             {errors.mobile && errors.mobile.type === "required" && (
//               <Text color="red.500">This field is required</Text>
//             )}
//             {errors.mobile && errors.mobile.type === "pattern" && (
//               <Text color="red.500">Invalid mobile number</Text>
//             )}
//           </FormControl>
//           <Flex gap={"10"} width={"100%"}>
//             <FormControl isInvalid={errors.dob}>
//               <FormLabel htmlFor="dob">Date of Birth</FormLabel>
//               <Input
//                 id="dob"
//                 type="date"
//                 {...register("dob", { required: true })}
//               />
//               {errors.dob && (
//                 <Text color="red.500">This field is required</Text>
//               )}
//             </FormControl>
//             <FormControl isInvalid={errors.gender}>
//               <FormLabel htmlFor="gender">Gender</FormLabel>
//               <RadioGroup defaultValue="1">
//                 <Stack direction="column" overflowX={"scroll"} height={"50px"}>
//                   <Radio
//                     id="male"
//                     name="gender"
//                     value="male"
//                     {...register("gender")}
//                   >
//                     Male
//                   </Radio>
//                   <Radio
//                     id="female"
//                     name="gender"
//                     value="female"
//                     {...register("gender")}
//                   >
//                     Female
//                   </Radio>

//                   <Radio
//                     id="others"
//                     name="gender"
//                     value="others"
//                     {...register("gender")}
//                   >
//                     Others
//                   </Radio>
//                 </Stack>
//               </RadioGroup>
//               {errors.gender && (
//                 <Text color="red.500">This field is required</Text>
//               )}
//             </FormControl>
//           </Flex>
//           <Button type="submit">Submit</Button>
//         </VStack>
//       </form>
//     </Box>
//   );
// }
const DIV = styled.div`
  .div1 {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  .div2 {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  .btn {
    border-radius: 30px;
    background-color: blue;

    cursor: pointer;
  }
  .btntext {
    font-weight: 600;
    color: white;
  }
`;
