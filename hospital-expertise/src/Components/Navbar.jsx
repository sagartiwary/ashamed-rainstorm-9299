import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,

  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  HStack,
  Input,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import logo from  "./logo.png";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <DIV>
    <Box >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
         <Text
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
          <NavLink to={"/"}> <Image 
             
              height={"30px"}
              objectFit="cover"
              src={logo}
              alt=""
            /></NavLink>
           
      </Text> 

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"strong"}
            fontSize={"md"}
            fontWeight={600}
            variant={"outline"}
            color={"white"}
            href={"#"}
            bg={"#0071C2"}
            _hover={{
              bg: "#0071C2",
            }}
            display={{ base: "none", md: "inline-flex" }}
          >
            Schedule An Appointment
          </Button>
          <Button
            as={"strong"}
          
            fontSize={"md"}
            fontWeight={600}
            color={"#0071C2"}
            variant={"outline"}
            border={"1px solid #0071C2"}
            // bg={"#0071C2"}
            // bg={"pink.400"}
            href={"#"}
            // _hover={{
            //   bg: "#0071C2",
            // }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    </DIV>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NavLink
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                className={"link"}
              >
                {navItem.label}
              </NavLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel,subLabel2 }) => {
  return (
    <NavLink
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("orange.100", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"} >
        <Box >
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#ED711C" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text  fontWeight={500} fontSize={"sm"}>{subLabel}</Text>
          <Text  fontWeight={500} fontSize={"sm"}>{subLabel2}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#ED711C"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </NavLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <Flex
        width={"100%"}
        gap={5}
        justifyContent={"center"}
        direction={["column", "row", "row", "row"]}
      >
        <Stack>
          <Flex
            border={"1px solid gray"}
            borderRadius={"5px"}
            gap={0}
            p={1.5}
            pl={2}
            pr={2}
          >
            <Input variant={"unstyled"} placeholder="Search" />
            <Stack mt={1}>
              <SearchIcon
                fontWeight={"bold"}
                fontSize={"20px"}
                color={"gray"}
              />
            </Stack>
          </Flex>
        </Stack>
        <Stack>
          <Button borderRadius={"20px"} bg={"#0071C2"} color={"white"}>
            Schedule Your Appointment
          </Button>
        </Stack>
      </Flex>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
    <NavLink to={href ?? "#"} >
      <Flex
        py={2}
        as={Link}
        to={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}


      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      </NavLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <NavLink key={child.label} py={2} to={child.href}>
                {child.label}
              </NavLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Get Care",
    children: [
      {
        label: "Find a Doctor",
        subLabel: "",
        subLabel2: "",
        href: "/finddoctor",
      },
      {
        label: "Virtual care",
        subLabel: "",
        href: "#",
      },
      {
        label: "ER + urgent care",
        subLabel: "",
        href: "#",
      },
    ],
  },
  
  {
    label: "Medicines",
    children: [
      {
        label: "Our Farmacy",
        subLabel: "",
        href: "/medicine",
      }]
  },
  {
    label: "Patlents Resources",
    children: [
      {
        label: "Bill pay",
        subLabel: "",
        href: "#",
      },
      {
        label: "Health Matters",
        subLabel: "",
        href: "#",
      },
      {
        label: "Emergency Services",
        subLabel: "",
        href: "#",
      },
      {
        label: "Find Medical records",
        subLabel: "",
        href: "#",
      },
      {
        label: "Our mission and History",
        subLabel: "",
        href: "#",
      },
      {
        label: "No Surprises Act",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Our Locations",
    children: [
      {
        label: "Our Locations",
        subLabel: "",
        href: "#",
      },
      {
        label: "Chandigarh",
        subLabel: "",
        href: "#",
      },
      {
        label: "Jaipur",
        subLabel: "",
        href: "#",
      },
      {
        label: "Bangalore",
        subLabel: "",
        href: "#",
      },
      {
        label: "Pune",
        subLabel: "",
        href: "#",
      },
      {
        label: "Hyderabad",
        subLabel: "",
        href: "#",
      },
      {
        label: "Channai",
        subLabel: "",
        href: "#",
      },
      {
        label: "Mumbai",
        subLabel: "",
        href: "#",
      },
      {
        label: "New Delhi",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Conditions & Treatements",
    href: "#",
  }
];
const DIV=styled.div`
position: sticky;
top: 0;
z-index: 100;
.link{
font-family: 'Roboto', sans-serif;
font-weight:600;
font-size: md !important;
}
`
