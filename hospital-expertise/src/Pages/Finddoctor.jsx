import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiTwotoneExperiment,
  AiOutlineRead,
} from "react-icons/ai";
import { BiBook, BiChat } from "react-icons/bi";

import i from "./doctor.png";
import {
  BsFillGeoAltFill,
  BsFillCursorFill,
  BsBookmarkCheckFill,
} from "react-icons/bs";
import { Search2Icon } from "@chakra-ui/icons";

import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Navbar from "../Components/Navbar";

import MyCard from "../Components/Doctorcard";
import { useDispatch, useSelector } from "react-redux";
import { getdoctor } from "../Redux/patient/action";
function Finddoctor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState("");
  const [doctor, setDoctor] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((store) => store.doctorreducer);
  const doctordata = data.doctors;
  const isLoading = data.isLoading;
  const isError=data.isError
  const finddocter = () => {};
  useEffect(() => {
    dispatch(getdoctor);
  }, []);
  return (
    <DIV>
      <div>
        <Navbar />
        <Box mt={10}>
          <Flex
            width={"100%"}
            textAlign={"center"}
            justifyContent={"center"}
            color={{ backgroundColor: "#ED711C" }}
            gap={5}
          >
            {/* <Image width={"20%"} height={"50%"} src={i} alt="image" /> */}
            <svg
              _ngcontent-kkk-c22=""
              viewBox="0 0 75 75"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ED711C"
              height={["150px"]}
            >
              <path
                _ngcontent-kkk-c22=""
                d="M59.7991 21.6244C59.6667 21.7841 59.526 21.937 59.4034 22.1042C57.2151 25.0872 57.4347 29.3529 59.9161 32.0749C60.6883 32.9218 60.9659 33.894 60.5936 35.0104C60.0351 36.6852 58.2141 37.1155 57.0061 35.8563C55.5572 34.3456 54.5301 32.561 54.0092 30.5154C52.7598 25.6075 53.6539 21.189 57.1476 17.5084C59.331 15.208 62.0657 14.1716 65.1989 14.4746C67.9501 14.7407 70.2084 16.0606 71.9927 18.2028C74.1596 20.8046 75.113 23.8555 74.9894 27.265C74.8716 30.5051 73.7679 33.3363 71.6051 35.7138C70.8262 36.5699 69.9249 36.7864 69.0468 36.3393C68.1649 35.89 67.6051 34.7104 67.7763 33.6792C67.8779 33.0659 68.1385 32.5485 68.5609 32.0971C71.2626 29.2095 71.3074 24.4373 68.6627 21.4953C68.4199 21.2252 68.1382 20.992 67.8194 20.786C67.8518 20.8448 67.8761 20.9109 67.9178 20.9619C69.4949 22.8887 69.1366 26.2401 67.0093 27.758C66.6236 28.0333 66.5006 28.3479 66.5014 28.8188C66.5143 36.4194 66.538 44.0202 66.5051 51.6208C66.4588 62.3566 58.9143 71.9615 48.7209 74.3623C46.4273 74.9024 44.1097 75.1106 41.775 74.944C36.6607 74.5792 32.1295 72.6783 28.2377 69.2425C24.353 65.813 21.8822 61.4898 20.7241 56.3709C20.3695 54.804 20.2491 53.2073 20.231 51.6009C20.2238 50.9592 20.1937 50.3178 20.1865 49.6761C20.1838 49.4311 20.1121 49.3245 19.8499 49.292C16.7647 48.9107 13.861 47.938 11.1982 46.2939C5.39681 42.7116 1.78396 37.5062 0.458126 30.6729C0.208127 29.3844 0.158217 28.0552 0.0071386 26.7458C-0.0372258 26.3609 0.125993 26.2704 0.474463 26.274C2.57248 26.2948 4.67079 26.3048 6.76896 26.2962C7.12597 26.2946 7.22594 26.3971 7.24048 26.7666C7.37252 30.1373 8.32951 33.2247 10.3781 35.8914C12.8195 39.0696 15.9359 41.1776 19.8581 41.8562C28.9398 43.4279 36.0255 37.1728 37.5889 29.8229C37.8087 28.789 37.8589 27.7172 37.9868 26.6627C37.9989 26.5632 38.0036 26.4626 38.0136 26.3396H45.1851C45.1452 27.091 45.1347 27.8195 45.0632 28.5416C44.8131 31.0701 44.2631 33.5304 43.19 35.8262C39.9598 42.7361 34.7566 47.1711 27.4543 48.9188C26.7398 49.09 26.0093 49.1929 25.2831 49.3077C25.0886 49.3384 25.0035 49.3908 24.9951 49.6096C24.7806 55.2398 26.3074 60.2352 30.1763 64.3309C32.9314 67.2473 36.2689 69.1006 40.1896 69.7756C45.7135 70.7268 50.6786 69.3741 55.0116 65.7633C58.5952 62.7772 60.7379 58.8749 61.45 54.1807C61.6087 53.1338 61.6679 52.0616 61.6706 51.0007C61.6904 43.5541 61.6808 36.1074 61.6918 28.6607C61.6924 28.2772 61.587 28.033 61.276 27.7993C59.4569 26.4316 58.8485 24.1005 59.7256 21.9716C59.768 21.8685 59.8084 21.7645 59.8497 21.661C59.8328 21.6488 59.8159 21.6366 59.7991 21.6244Z"
              ></path>
              <path
                _ngcontent-kkk-c22=""
                d="M5.6905 28.8366H3.36703C2.39669 28.8366 1.42589 28.8192 0.456003 28.8457C0.104526 28.8553 -0.00345791 28.7272 8.38358e-05 28.3377C0.0139345 26.8217 0.00546514 25.3055 0.00546514 23.7893V11.431C0.00546514 7.18241 1.96581 4.22552 5.57828 3.06377C6.13166 2.88594 6.71363 2.82501 7.27593 2.67859C7.48191 2.62503 7.73131 2.53852 7.85547 2.36807C8.85848 0.991583 10.1712 0.269956 11.6962 0.0600246C13.1834 -0.144414 14.5899 0.169024 15.8968 1.06711C18.7324 3.01605 18.8608 7.11031 16.1341 9.28876C13.6213 11.2962 9.80841 10.8599 7.89374 8.22039C7.82023 8.11929 7.62983 8.04599 7.5173 8.07534C6.67294 8.29557 5.64589 9.19229 5.66056 10.5909C5.69716 14.0662 5.67039 17.5423 5.67341 21.0181C5.67538 23.4341 5.6846 25.8503 5.6905 28.2665C5.6908 28.4357 5.6905 28.6048 5.6905 28.8366Z"
              ></path>
              <path
                _ngcontent-kkk-c22=""
                d="M38.2731 19.3287C38.2729 16.4544 38.2458 13.5794 38.2846 10.7058C38.3037 9.29725 37.447 8.41537 36.4893 8.08043C36.2919 8.01142 36.1604 8.06155 36.0076 8.25743C34.6093 10.0514 32.8246 10.7015 30.7633 10.4926C29.5838 10.3729 28.5172 9.91389 27.5857 9.07733C25.252 6.98173 25.2935 3.41352 27.6709 1.3823C29.8748 -0.500606 33.1673 -0.456486 35.3168 1.49371C35.5512 1.70641 35.7964 1.93336 35.9579 2.21267C36.1754 2.58847 36.4723 2.65301 36.8181 2.70366C39.026 3.02709 40.9341 4.03189 42.406 5.97779C43.4206 7.31872 43.9208 8.88575 43.9168 10.6586C43.9154 11.302 43.9156 11.9456 43.9172 12.5891C43.9302 17.8218 43.9395 23.0547 43.9648 28.2873C43.9668 28.7067 43.891 28.853 43.4928 28.8462C41.9102 28.8179 40.3269 28.8253 38.744 28.8413C38.383 28.8451 38.2648 28.7086 38.2666 28.2952C38.2788 25.3064 38.2732 22.3176 38.2731 19.3287Z"
              ></path>
            </svg>
            <Stack textAlign={"center"} marginTop={"5"}>
              <Heading
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                color={"#ED711C"}
              >
                Find A Doctor
              </Heading>
            </Stack>
          </Flex>
          <Flex width={"100%"}>
            <Flex
              width={"100%"}
              border={["none", "none", "none", "2px solid blue"]}
              gap={"10px"}
              alignItems={"center"}
              justifyContent={"center"}
              margin={"5%"}
              direction={["column", "column", "column", "row"]}
            >
              <Flex
                width={"50%"}
                border={[
                  "2px solid blue",
                  "2px solid blue",
                  "2px solid blue",
                  "none",
                ]}
              >
                <Stack m={"3"}>
                  <Search2Icon />
                </Stack>
                <Stack width={"100%"}>
                  <Input
                    variant={"unstyled"}
                    p={3}
                    placeholder="Name , Speciality , Insurance"
                    fontWeight={"bold"}
                  />
                </Stack>
              </Flex>
              <Divider style={{ width: "5px" }} orientation="vertical" />
              <Flex
                width={"50%"}
                border={[
                  "2px solid blue",
                  "2px solid blue",
                  "2px solid blue",
                  "none",
                ]}
              >
                <Stack m={"3"}>
                  <BsFillGeoAltFill />
                </Stack>
                <Stack width={"100%"}>
                  <Input
                    p={3}
                    variant={"unstyled"}
                    placeholder="City or Zip"
                    fontWeight={"bold"}
                  />
                </Stack>
                <Stack m={"3"}>
                  <BsFillCursorFill />
                </Stack>
              </Flex>
            </Flex>
          </Flex>
          <Box width={"100%"} alignItems={"center"} mt={[5, 5, -10, "-16"]}>
            <Box p={2} m={"3"} color={"white"}>
              <Button
                onClick={finddocter}
                variant={"unstyled"}
                bg={"blue.500"}
                fontSize={"x-large"}
                fontWeight={"bold"}
              >
                {" "}
                <Text
                  ml={2}
                  as={"strong"}
                  fontSize={"x-large"}
                  fontWeight={"bold"}
                >
                  Find Doctor
                </Text>{" "}
                <Text
                  ml={2}
                  p={3}
                  as={"strong"}
                  fontSize={"x-large"}
                  fontWeight={"bold"}
                >
                  <Search2Icon />
                </Text>
              </Button>
            </Box>
          </Box>
          <VStack className="services" width={"100%"}>
            <Flex direction={["column", "row", "row", "row"]} gap={5}>
              <Box width={"100%"} className={"divcont"} color={"white"}>
                <Box>
                  <BiChat size={"30px"} />
                </Box>
                <Box>
                  <Text color={"white"} as="p">
                    Consult with a Doctor
                  </Text>
                </Box>
              </Box>
              <Box width={"100%"} className={"divcont"}>
                <Box>
                  <AiOutlineShoppingCart size={"30px"} />
                </Box>
                <Box>
                  <Text color={"white"}>Order Medicines</Text>
                </Box>
              </Box>
              <Box width={"100%"} className={"divcont"}>
                <Box>
                  {" "}
                  <BiBook size={"30px"} />
                </Box>

                <Box>
                  <Text color={"white"}>View Medical records</Text>
                </Box>
              </Box>
              <Box width={"100%"} className={"divcont"}>
                <Box>
                  <AiTwotoneExperiment size={"30px"} />
                </Box>
                <Box>
                  <Text color={"white"}>Book Test</Text>
                </Box>
              </Box>

              <Box width={"100%"} className={"divcont"}>
                <Box>
                  <AiOutlineRead size={"30px"} />
                </Box>
                <Box>
                  <Text color={"white"}>Read Articals</Text>
                </Box>
              </Box>
            </Flex>
          </VStack>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            direction={["column", "column", "row", "row"]}
            mt={6}
            gap={"10%"}
          >
            <Box className="prior">
              <Box mb={6}>
                <Heading as={"h3"}>Safety of your data is our</Heading>
                <Heading float={"start"} fontSize={"5xl"} as={"strong"}>
                  Top priority.
                </Heading>
              </Box>
              <Box alignItems={"center"}>
                <List>
                  <ListItem fontWeight={"bold"} display={"flex"}>
                    <Stack b display={"block"}>
                      <BsBookmarkCheckFill color="green" />
                    </Stack>
                    Multi-level security checks
                  </ListItem>
                  <ListItem fontWeight={"bold"} display={"flex"}>
                    <BsBookmarkCheckFill color="green" />
                    Multiple data backups
                  </ListItem>
                  <ListItem fontWeight={"bold"} display={"flex"}>
                    <BsBookmarkCheckFill color="green" />
                    Stringent data privacy policies
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png"
                alt="secure"
              />
            </Box>
          </Flex>
        </Box>
        <VStack className="secure" width={"100%"}>
          <Flex direction={["column", "row", "row", "row"]} gap={5}>
            <Box width={"100%"} className={"divcont"}>
              <Box>
                <Image
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png"
                  size={"30px"}
                />
              </Box>
              <Box>
                <Text as="p" id="cl">
                  256-bit encryption
                </Text>
              </Box>
            </Box>
            <Box width={"100%"} className={"divcont"}>
              <Box>
                {" "}
                <Image
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png"
                  size={"30px"}
                />
              </Box>

              <Box>
                <Text as="p" id="cl">
                  HIPAA compliant data centers
                </Text>
              </Box>
            </Box>
            <Box width={"100%"} className={"divcont"}>
              <Box>
                <Image
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png"
                  size={"30px"}
                />
              </Box>
              <Box>
                <Text as="p" id="cl">
                  ISO 27001 certified
                </Text>
              </Box>
            </Box>

            <Box width={"100%"} className={"divcont"}>
              <Box>
                <Image
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png"
                  size={"30px"}
                />
                <Box>
                  <Text as="p" id="cl" color={"black"}>
                    DSCI member
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </VStack>
        {!isLoading ? (
          <Box width={"100%"} className="doctormap" mt={10}>
            <Heading width={"container.sm"}>Our Doctors</Heading>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={3}
              width={"100%"}
              justifyItems={"center"}
              mt={10}
            >
              {doctordata?.map((i) => (
                <MyCard key={i.id} {...i} />
              ))}
            </Grid>
          </Box>
        ) : (
          <>
          <Skeleton
            height="40px"
            isLoaded={!isLoading}
            bg="green.500"
            color="white"
            fadeDuration={1}
            mb={5}
          ></Skeleton>
          <Skeleton
            height="40px"
            isLoaded={!isLoading}
            bg="green.500"
            color="white"
            fadeDuration={1}
          ></Skeleton>
          <Skeleton
            height="40px"
            isLoaded={!isLoading}
            bg="green.500"
            color="white"
            fadeDuration={1}
          ></Skeleton>
          <Skeleton
            height="40px"
            isLoaded={!isLoading}
            bg="green.500"
            color="white"
            fadeDuration={1}
          ></Skeleton>
          </>
        )}
      </div>
    </DIV>
  );
}

export default Finddoctor;
const DIV = styled.div`
  .services {
    padding: 5px;
    background-color: blue;
    color: white;
  }
  .secure {
    padding: 5px;
    background-color: white;
    color: white;
  }
  .divcont {
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .divcont:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  p {
    font-weight: 600;
  }
  .prior {
  }
  .doctormap {
    overflow: hidden;
  }
  #cl {
    color: red;
  }
`;
