import { Box, Text } from "@chakra-ui/layout";
import DoctorTimeSlotSelect from "./DoctorTimeSloteSelect";
import { Image } from "@chakra-ui/image";
import { useEffect } from "react";
import { doctorname } from "../Redux/collecter/action";
import { useDispatch } from "react-redux";



const DoctorProfile = (doctorData) => {
  const { name, title, specialist, details, img, timeslote } = doctorData;
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(doctorname(name))
},[name])
  return (
    <Box display={"block"} alignItems={"center"} maxW={"450px"} overflow={"hidden"}>
      <Image maxWidth={"50%"} src={img} alt={name} mb="4" />
      <Text fontSize="2xl" fontWeight="bold" mb="2">
        {name}
      </Text>
      <Text fontSize="lg" fontWeight="bold" mb="2">
        {title}
      </Text>
      <Text fontSize="lg" mb="4">
        {specialist}
      </Text>
      <Text mb="4">{details}</Text>
      <DoctorTimeSlotSelect timeslot={timeslote} />
    </Box>
  );
};

export default DoctorProfile;
