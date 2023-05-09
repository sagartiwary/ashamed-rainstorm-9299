import { Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Button, useToast, Icon, InputLeftElement, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { SiPaytm, SiGooglepay, SiPhonepe } from "react-icons/si";
import {
    
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
  } from "@chakra-ui/react";
import styled from "styled-components";

const PaymentComponent = ({ isOpen, onClose }) => {
  const [showCvv, setShowCvv] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: "Payment Successful",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  const paymentMethods = [
    { name: "Paytm", icon: SiPaytm },
    { name: "Google Pay", icon: SiGooglepay },
    { name: "PhonePe", icon: SiPhonepe },
  ];

  return (

    <>

    <motion.div
      initial="hidden"
      animate={!isOpen ? "visible" : "hidden"}
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
      }}
      transition={{ duration: 0.3 }}
    >
      <Box
        bg="white"
        boxShadow="xl"
        p={6}
        rounded="md"
        maxW="md"
        mx="auto"
      >
      <Text>Fees: ₹ 500</Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {paymentMethods.map((method) => (
              <FormControl key={method.name}>
                <FormLabel>{method.name}</FormLabel>
                <InputGroup>
                  <InputRightElement
                    pointerEvents="none"
                    size={"xl"}
                    children={<Icon as={method.icon} color="blue" />}
                  />
                 
                  
                  <Input type="tel" maxLength={10} pattern="[0-9]{10}" placeholder="Enter mobile number" />
                </InputGroup>
              </FormControl>
            ))}
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock color="gray" />} />
                <Input type="tel" maxLength={16} pattern="[0-9]{16}" placeholder="Enter card number" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
              </InputGroup>
            </FormControl>
            
            <FormControl>
              <FormLabel>Card Holder Name</FormLabel>
              <Input type="text" placeholder="Enter card holder name" value={cardHolderName} onChange={(event) => setCardHolderName(event.target.value)} />
            </FormControl>
            <Stack direction="row" spacing={4}>
              <FormControl>
                <FormLabel>Expiry Date</FormLabel>
                <Input type="month" placeholder="Enter expiry date" value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>CVV</FormLabel>
                <InputGroup >
                  <Input p={5} type={showCvv ? "text"  : "password"} maxLength={3} pattern="[0-9]{3}" placeholder="Enter CVV" value={cvv} onChange={(event) => setCvv(event.target.value)} />
                 
                  <Input type="tel" maxLength={3} pattern="[0-9]{3}" placeholder="Enter CVV" value={cvv} onChange={(event) => setCvv(event.target.value)} />
                  <InputRightElement width="3rem">
                    <Button h="1.5rem" size="sm" onClick={() => setShowCvv(!showCvv)}>
                      {showCvv ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Button type="submit" colorScheme="blue" variant="solid">
              Pay
            </Button>
          </Stack>
        </form>
      </Box>
    </motion.div>


    <Popup/>
    </>
  );
};

export default PaymentComponent;




export const Popup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState(true);

  const handleButtonClick = () => {
   
    onOpen();
  };
setTimeout(() => {
    setMessage(false)  
}, 1000);
  return (
    <DIV>
    <>
      <Button className="btn" disabled={message} onClick={handleButtonClick} >Continue payment</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Form</ModalHeader>
          <ModalBody>
            <PaymentComponent/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    </DIV>
  );
};
const DIV=styled.div`
.btn:hover{
    background-color: blue;
}
.btn{
    color: white;
    background-color: blue;
}

`



