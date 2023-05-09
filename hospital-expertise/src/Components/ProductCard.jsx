import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postproduct } from "../Redux/addtocart/action";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id, image, name, product_form, price, special_price }) => {
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const boxShadow = useColorModeValue("lg", "dark-lg");
  const [quantity,setquantiity]=useState(1)
  const dispatch = useDispatch();
  const addtocardhandler = (
    id,
    image,
    name,
    product_form,
    price,
    special_price
  ) => {
    dispatch(postproduct({ image, name, product_form, price, special_price }))
      .then((res) => {
        toast.success("product added successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  console.log(quantity,"............")

  const handleinc=()=>{

    setquantiity((quantity)=>quantity+1)
    console.log("quan","---------)",quantity)
  }
  return (
    <DIV>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        <ToastContainer />
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          borderColor={borderColor}
          boxShadow={boxShadow}
          w="full"
          maxHeight={"400px"}
        >
          <Image
            maxW={"200px"}
            maxH={"200px"}
            objectFit={"cover"}
            src={`https://newassets.apollo247.com/pub/media${image}`}
            alt={name}
          />
          <Box p="6" overflow={"hidden"} maxH={"150px"}>
            <Flex alignItems="baseline">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {product_form}
              </Text>
              <Text
                ml="2"
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.200")}
                textDecoration={special_price && "line-through"}
              >
                {price}
              </Text>
              {special_price && (
                <Text
                  ml="2"
                  fontSize="sm"
                  color="green.500"
                  fontWeight="semibold"
                >
                  Price:{"" + special_price}
                </Text>
              )}
            </Flex>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              className="text"
            >
              {name}
            </Box>

            {/* <Box d="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
              
              </Box>
            </Box> */}
          </Box>
          <Flex
          
            direction={"column-reverse"}
            justifyContent={"center"}
          >
            <Box display={"flex"} alignItems={"center"}  justifyContent={"center"}>
             <NavLink to={"/cart"}><Button
                colorScheme="blue"
           
                mb={10}
                onClick={() =>
                  addtocardhandler(
                    id,
                    image,
                    name,
                    product_form,
                    price,
                    special_price,quantity
                  )
                }
              >
                Add to Cart
              </Button></NavLink> 
            </Box>
            <Box
            display={"flex"}
              as="span"
              color="gray.600"
              fontSize="sm"
              
              width={"100%"}
              justifyContent={"center"}
            >
              <Button isDisabled={quantity<=1?true:false}  onClick={()=>setquantiity(quantity-1)} variant={"unstyled"}>-</Button>
              <Button disabled variant={"unstyled"}>{quantity}</Button>
              <Button onClick={handleinc} variant={"unstyled"}>+</Button>
            </Box>
          </Flex>
        </Box>
      </motion.div>
    </DIV>
  );
};

export default Card;

const DIV = styled.div`
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
`;
