import { Box, Flex, Heading, Text, Button, Stack, Toast, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct, getproduct } from "../Redux/addtocart/action";
import {toast,ToastContainer} from "react-toastify"

const CartItem = ({
  id,
  image,
  name,
  productForm,
  price,
  special_price,
  quantity,
  onRemove,
}) => {
  const dispatch = useDispatch();
  const handleRemoveClick = (id) => {
    dispatch(deleteproduct(id));
    onRemove(id);
  };

  return (
    <Flex
      p="4"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      alignItems="center"
    >
      <Box mr="4"     maxW="200px">
        <motion.img
          src={`https://newassets.apollo247.com/pub/media${image}`}
          alt={name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
     
        />
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500" mb="1">
          {productForm}
        </Text>
        <Text fontSize="lg" fontWeight="bold" mb="2">
          {special_price ? `₹ ${special_price}` : `₹ ${price}`}
        </Text>
        <Flex alignItems="center">
          <Button size="xs" variant="outline" onClick={()=>handleRemoveClick(id)}>
            Remove
          </Button>
          <Text mx="2" fontSize="lg" fontWeight="bold">
            x {quantity}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

const Cart = ({ items, onRemove }) => {
  const totalPrice = items.reduce(
    (total, item) => total + +item.special_price * (item.quantity || 1),
    0
  );

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      maxW={"100%"}
    >
      <Stack spacing="0">
        {items.map((item) => (
          <CartItem key={item.id} {...item} onRemove={onRemove} />
        ))}
      </Stack>
      <Box p="4" borderTopWidth="1px" borderTopColor="gray.200">
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Total: ₹ {totalPrice}
        </Text>
      </Box>
    </Box>
  );
};

const Checkout = () => {


  const orderplace=()=>{
    toast.success("Order placed")
  }
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
    <ToastContainer/>
      <Stack spacing="4" p="4">
        <Heading size="md">Shipping Information</Heading>
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <Stack spacing="4">
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb="1">
                Full Name
              </Text>
              <input type="text" placeholder="Full Name" />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb="1">
                Address
              </Text>
              <input type="text" placeholder="Address" />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb="1">
                City
              </Text>
              <input type="text" placeholder="City" />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb="1">
                Country
              </Text>
              <input type="text" placeholder="Country" />
            </Box>
          </Stack>
        </Box>
        <Heading size="md">Payment Information</Heading>
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <Stack spacing="4">
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb="1">
                Card Number
              </Text>
              <input type="text" placeholder="Card Number" />
            </Box>
            <Box>
              <Flex justify="space-between">
                <Box mr="4">
                  <Text fontSize="lg" fontWeight="bold" mb="1">
                    Expiration Date
                  </Text>
                  <input type="text" placeholder="MM/YY" />
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb="1">
                    CVV
                  </Text>
                  <input type="text" placeholder="CVV" />
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Box>
        <Button colorScheme="blue" size="lg" onClick={orderplace}>
          Place Order
        </Button>
      </Stack>
    </Box>
  );
};

const CartPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.addtocardreducer);
 
  const [cartItems, setCartItems] = useState(products||[]);

  const handleRemoveCartItem = (itemId) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    dispatch(getproduct)
  }, []);

  return (
    <Flex
      justify="center"
      alignItems="flex-start"
      p="8"
      direction={["column", "column", "row", "row"]}
    >
      <Box maxW="100%" mr="8">
        <Heading mb="4">Cart</Heading>
        {cartItems.length > 0 ? (
          <Cart items={cartItems} onRemove={handleRemoveCartItem} />
        ) : (
          <Text>No items in cart.</Text>
        )}
      </Box>
      <Box maxW="100%">
        <Heading mb="4">Checkout</Heading>
        <Checkout />
      </Box>
    </Flex>
  );
};

export default CartPage;
