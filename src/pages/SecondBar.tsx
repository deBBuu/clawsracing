import { Box, styled, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Flag from 'react-world-flags';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

// Extend dayjs to use the duration plugin
dayjs.extend(duration);

const SecondBar = () => {
    const [countryCode, setCountryCode] = useState('IT');
    const [trackName, setTrackName] = useState('IMOLA');
    const [eventTitle, setEventTitle] = useState('PEC Round 5');

    // Hard-coded race date
    const [raceDate] = useState('2025-04-20T21:10:00'); // Your hard-coded race date

    const [timeRemaining, setTimeRemaining] = useState('');

    // Calculate time remaining when the component mounts or when the race date changes
    useEffect(() => {
        const calculateTimeRemaining = () => {
            const diff = dayjs(raceDate).diff(dayjs()); // Compare the input date with now
            const dur = dayjs.duration(diff);
            const days = dur.days();
            const hours = dur.hours();
            const minutes = dur.minutes();
            let formattedDuration = ''
            if (days) {
                formattedDuration += `${days} days `;
            }
            if (hours){
                formattedDuration += `${hours} hours `;
            }
            if (minutes) {
                formattedDuration += `${minutes} minutes`;
            }

            setTimeRemaining(formattedDuration);
        };

        calculateTimeRemaining(); // Initial calculation

        // Update every second (1000 ms)
        const intervalId = setInterval(calculateTimeRemaining, 1000);

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, [raceDate]);

    return (
        <Wrapper>
            <Icon code={countryCode} />
            <Title>- {trackName} -</Title>
            <Title>{eventTitle} -</Title>

            {/* Display duration remaining */}
            <Subtitle>{timeRemaining || 'Calculating time remaining...'}</Subtitle>
            <Subtitle>until the next race</Subtitle>
        </Wrapper>
    );
};

export default SecondBar;

const Wrapper = styled(Box)`
    width: 100%;
    display: flex;
    margin: 0;
    align-items: center;
    gap: 10px;
    height: 50px;
    flex-direction: row;
    padding: 0 48px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to right,
    #470145 0%,   /* Darker purple on the left side */
    #760070 30%,   /* Main purple starts here */
    #760070 50%,   /* Main purple center */
    #760070 70%,   /* Continue the main purple */
    #470145 100%   /* Darker purple on the right side */
    );
    color: white;
`;

const Icon = styled(Flag)`
    width: 30px;
    margin: 0;
    padding: 0;
`;

const Subtitle = styled(Typography)`
    height: auto;
    margin-top: 5px;
    padding: 0;
    display: flex;
    width: auto;
    align-items: center;
    font-size: 20px;
    font-family: 'Hurme', sans-serif;
    font-weight: 200;
`;

const Title = styled(Subtitle)`
    height: auto;
    margin-top: 5px;
    padding: 0;
    display: flex;
    width: auto;
    align-items: center;
    font-size: 20px;
    font-family: 'Hurme', sans-serif;
    font-weight: 300;
`;
