import { useEffect, useState } from "react";
import { Select, VStack, Text, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { timeslote } from "../Redux/collecter/action";

const DoctorTimeSlotSelect = ({ timeslot }) => {
    const dispatch=useDispatch()
  console.log(timeslot);
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value);

  };
useEffect(()=>{
dispatch(timeslote(selectedTime))
},[selectedTime])
  return (
    <Box>
      <VStack align="stretch">
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Select a time slot:
        </Text>
        <Select placeholder="Select a time" onChange={handleTimeSelect}>
          {timeslot?.time.map((time, index) => (
            <option key={index} value={timeslot.status[index]?time:""} disabled={!timeslot.status[index]}>
              {time} {timeslot.status[index] ? "" : "(unavailable)"}
            </option>
          ))}
        </Select>
        {selectedTime && (
          <Text mt="2" p={5} fontSize={"md"} fontWeight={"600"}>
            You have selected {selectedTime}. Please confirm your appointment.
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default DoctorTimeSlotSelect;
