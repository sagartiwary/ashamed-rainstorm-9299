import { Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

function CalendarCom() {
  const [date, setDate] = useState(new Date());
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  console.log(dd,mm,yyyy)
  return (
    <Box className='app'>
    <Heading as='p' fontSize={"sm"} className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </Heading>
     
      <Box className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </Box>
      
    </Box>
  );
}

export default CalendarCom;