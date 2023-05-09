import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";

const variants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const options = [
  
    { value: "asc", label: "Low to High" },
    { value: "desc", label: "High to Low" },
  ];
  const options2 = [
   
    { value: "asc", label: "A to Z" },
    { value: "desc", label: "Z to A" },
  ];
  const options3 = [
  
    { value: "asc", label: "Low to High" },
    { value: "desc", label: "High to Low" },
  ];

  const handleSelectChange = (event) => {
    console.log(`Selected option: ${event.target.value}`);
  };
  return (
    <>
    <Flex justifyContent={"space-between"} m={10}>
      <Flex justify="space-between" align="center" mb="6" justifyContent={'space-between'} width={"10%"}>
        {!isOpen ? (
          <Button
            variant={"unstyled"}
            border={"2px solid blue"}
            borderRadius={"10px"}
            p={2}
            onClick={handleToggle}
          >
            Show Filter
          </Button>
        ) : (
          <Button variant={"unstyled"} onClick={handleToggle}>
            <CloseIcon />
          </Button>
        )}
      </Flex>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
            // bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            position="fixed"
            top={0}
            left={0}
            h="full"
            w="64"
            p="6"
            overflowX="hidden"
            overflowY="auto"
          >
            <Stack spacing="6" width={"100%"} >
              <Flex justifyContent={"space-around"} gap={"40px"}>
                <Box>
                  <Select
                    placeholder="Select an option"
                    onChange={handleSelectChange}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                <Select
                    placeholder="Select an option"
                    onChange={handleSelectChange}
                  >
                    {options2.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Box>
                <Select
                    placeholder="Select an option"
                    onChange={handleSelectChange}
                  >
                    {options3.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </Box>
              </Flex>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
      </Flex>
    </>
  );
};

export default Sidebar;
