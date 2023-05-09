// import React, { useState, useEffect } from 'react';
// import Autosuggest from 'react-autosuggest';
// import axios from 'axios';
// import { Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';

// export const SearchDoctor = () => {
//   const [doctor, setDoctor] = useState("");
//   const [location, setLocation] = useState("");
//   const [doctorSuggestions, setDoctorSuggestions] = useState([]);
//   const [locationSuggestions, setLocationSuggestions] = useState([]);

//   useEffect(() => {
//     if (doctor) {
//       axios.get(`http://localhost:8080/data?search=${doctor}`)
//         .then(response => {
//           setDoctorSuggestions(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }

//     if (location) {
//       axios.get(`http://localhost:8080/data?search=${location}`)
//         .then(response => {
//           setLocationSuggestions(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   }, [doctor, location]);

//   const onDoctorChange = (event) => {
//     setDoctor(event.target.value);
//   };

//   const onLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const onDoctorSelected = (event) => {
//     setDoctor(event.target.value);
//   };

//   const onLocationSelected = (event) => {
//     setLocation(suggestion);
//   };

//   const getDoctorSuggestions = (value) => {
//     // implement your own logic to get suggestions based on the input value
//     const suggestions = ['doctor 1', 'doctor 2', 'doctor 3'];
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;

//     return inputLength === 0 ? [] : suggestions.filter(suggestion =>
//       suggestion.toLowerCase().slice(0, inputLength) === inputValue
//     );
//   };

//   const getLocationSuggestions = (value) => {
//     // implement your own logic to get suggestions based on the input value
//     const suggestions = ['location 1', 'location 2', 'location 3'];
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;

//     return inputLength === 0 ? [] : suggestions.filter(suggestion =>
//       suggestion.toLowerCase().slice(0, inputLength) === inputValue
//     );
//   };

//   const doctorInputProps = {
//     placeholder: 'Search for a doctor',
//     value: doctor,
//     onChange: onDoctorChange,
//   };

//   const locationInputProps = {
//     placeholder: 'Search for a location',
//     value: location,
//     onChange: onLocationChange,
//   };

//   return (
//     <div>
//       <InputGroup>
//         <InputLeftAddon children="Doctor" />
//         <Autosuggest
//           suggestions={doctorSuggestions}
//           onSuggestionsFetchRequested={({ value }) => setDoctorSuggestions(getDoctorSuggestions(value))}
//           onSuggestionsClearRequested={() => setDoctorSuggestions([])}
//           getSuggestionValue={(suggestion) => suggestion}
//           renderSuggestion={(suggestion) => <div>{suggestion}</div>}
//           onSuggestionSelected={onDoctorSelected}
//           inputProps={doctorInputProps}
//         />
//       </InputGroup>
//       <InputGroup>
//         <InputLeftAddon children="Location" />
//         <Autosuggest
//           suggestions={locationSuggestions}
//           onSuggestionsFetchRequested={({ value }) => setLocationSuggestions(getLocationSuggestions(value))}
//           onSuggestionsClearRequested={() => setLocationSuggestions([])}
//           getSuggestionValue={(suggestion) => suggestion}
//           renderSuggestion={(suggestion) => <div>{suggestion}</div>}
//           onSuggestionSelected={onLocationSelected}
//           inputProps={locationInputProps}
//         />
//       </InputGroup>
//     </div>
//   );
// };



