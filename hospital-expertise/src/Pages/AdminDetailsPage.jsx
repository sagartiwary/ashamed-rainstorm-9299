import React, { useEffect } from "react";
import {
  Spinner,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { deleteData, getData } from "../Reducer/action";
export const AdminDetailsPage = () => {
  const dispatch = useDispatch();
  const { loading, error, doctorData } = useSelector((state) => {
    return {
      loading: state.loading,
      error: state.error,
      doctorData: state.doctorData,
    };
  }, shallowEqual);

//   const handleDelete=(id)=>{
//        dispatch(deleteData(id)).then((res)=>{
//         dispatch(getData({}))
//        })
//   }

    console.log(doctorData);
    
    useEffect(() => {
      dispatch(getData);
    }, []);

    if (loading) {
      return (
        <Flex justify="center" align="center" h="100vh">
          <Spinner size="xl" />
        </Flex>
      );
    }

    if (error) {
      <Flex justify="center" align="center" h="100vh" direction="column">
        <Text mb={4}>Something Wrong</Text>
      </Flex>;
    }

    return (
      <Box>
        <Table variant="simple" borderWidth="1px" borderColor="gray.200">
          <Thead bg="gray.50">
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Profession</Th>
              <Th>Experience</Th>
              <Th>Location</Th>
              <Th>Fee</Th>
              <Th>Delete</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {doctorData.map((item, index) => (
              <Tr _hover={{ bg: "gray.100" }} key={item.id}>
                <Td borderWidth="1px" borderColor="gray.200">
                  {index + 1}
                </Td>
                <Td borderWidth="1px" borderColor="gray.200">
                  {item.name}
                </Td>
                <Td borderWidth="1px" borderColor="gray.200">
                  {item.professionalInput}
                </Td>
                <Td borderWidth="1px" borderColor="gray.200">
                  {item.experienceInput}
                </Td>
                <Td borderWidth="1px" borderColor="gray.200">
                  {item.locationInput}
                </Td>
                <Td>{item.feeInput}</Td>
                <Td borderWidth="1px" borderColor="gray.200">
                  <Button
                    
                    colorScheme="red"
                  >
                    DELETE
                  </Button>
                </Td>
                <Td borderWidth="1px" borderColor="gray.200">
                  <Button colorScheme="blue">EDIT</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  };

