import {Box, styled, Typography} from "@mui/material";
import Flag from 'react-world-flags';

const SecondBar = () => {
  return (
      <Wrapper>
          <Icon code='it'/>
          <Title>ITALY</Title>
          <Subtitle>Autodromo Enzo e Dino Ferrari</Subtitle>
      </Wrapper>
  )
};

export default SecondBar;

const Wrapper = styled(Box)`
    width: 100%;
    display: flex;
    margin: 0;
    align-items: center;
    gap: 15px;
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
`

const Icon = styled(Flag)`
    width: 30px;
    margin: 0;
    padding: 0;
`

const Title = styled(Typography)`
    height: auto;
    margin-top: 5px;
    padding: 0;
    display: flex;
    width: auto;
    align-items: center;
    font-size: 20px;
    font-family: 'Hurme', sans-serif;
    font-weight: 300;
`

const Subtitle = styled(Title)`
    font-family: 'Hurme', sans-serif;
    font-weight: 200;
`