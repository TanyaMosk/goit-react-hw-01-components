import styled from 'styled-components'

export const Table = styled.table`
background-color: white; 
  margin: auto;
  width: 700px;
  border-radius: 5px;  
  tbody{
    background-color: whitesmoke;
  }
  tbody:nth-child(odd){
  background-color: aliceblue;
}

`;

export const Thead = styled.thead`
background-color: blue;
height: 40px;
`;

export const Tbody = styled.tbody`
text-align: center;
height: 30px;
font-size: 14px;

`;




   
