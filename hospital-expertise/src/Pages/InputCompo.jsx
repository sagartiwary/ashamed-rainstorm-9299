import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function InputCompo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box maxW="sm" mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="4">
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && <Text color="red.500">This field is required</Text>}
          </FormControl>
          <FormControl isInvalid={errors.age}>
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              {...register("age", { required: true, min: 18 })}
            />
            {errors.age && errors.age.type === "required" && (
              <Text color="red.500">This field is required</Text>
            )}
            {errors.age && errors.age.type === "min" && (
              <Text color="red.500">You must be at least 18 years old</Text>
            )}
          </FormControl>
         
          <FormControl isInvalid={errors.address}>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              id="address"
              placeholder="Enter your address"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <Text color="red.500">This field is required</Text>
            )}
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (
              <Text color="red.500">This field is required</Text>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <Text color="red.500">Invalid email address</Text>
            )}
          </FormControl>
          <FormControl isInvalid={errors.mobile}>
            <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              {...register("mobile", { required: true, pattern: /^\d{10}$/ })}
            />
            {errors.mobile && errors.mobile.type === "required" && (
              <Text color="red.500">This field is required</Text>
            )}
            {errors.mobile && errors.mobile.type === "pattern" && (
              <Text color="red.500">Invalid mobile number</Text>
            )}
          </FormControl>
          <Flex gap={"5px"}>
          <FormControl isInvalid={errors.dob}>
            <FormLabel htmlFor="dob">Date of Birth</FormLabel>
            <Input
              id="dob"
              type="date"
              {...register("dob", { required: true })}
            />
            {errors.dob && <Text color="red.500">This field is required</Text>}
          </FormControl>
          <FormControl isInvalid={errors.gender}>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <RadioGroup defaultValue='1'>
            <Stack direction="row">
              <Radio id="male"  name="gender" value="male" {...register("gender")}>
                Male
              </Radio>
              <Radio id="female" name="gender" value="female" {...register("gender")}>
                Female
              </Radio>

              <Radio id="others" name="gender" value="others" {...register("gender")}>
                Others
              </Radio>
            </Stack></RadioGroup>
            {errors.gender && (
              <Text color="red.500">This field is required</Text>
            )}
          </FormControl></Flex>
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
}
