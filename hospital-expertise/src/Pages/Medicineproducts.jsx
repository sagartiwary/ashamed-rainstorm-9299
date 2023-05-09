import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPRODUCT } from "../Redux/medicineproducts/action";
import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Card from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";

export default function Medicineproducts() {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (store) => store.productreducer
  );

  useEffect(() => {
    dispatch(getPRODUCT);
  }, []);
  return (
    <DIV>
      <Box className="topcont">
        <Navbar />
        <Sidebar />
        <Box width={"100%"} className="main"top={-10}>
          <Flex >
            <Box className="sidebar"> </Box>
            <Box className="cardcont" ml={10} mr="10">
              <Heading fontSize={"xl"} fontWeight={"600"}>
                All Product
              </Heading>
              <Grid
              mt="5px"
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                gap={"10px"}
                justifyContent={"center"}
              >
                {products.map((prod) => (
                  <GridItem>
                    <Card {...prod} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Box>
    </DIV>
  );
}

const DIV = styled.div`
  .cardcont {
    width: 100%;
  }
`;
