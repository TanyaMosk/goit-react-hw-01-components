import styled from 'styled-components'

export const Table = styled.table`
  background-color: white; 
  margin: auto;
  width: 700px;
  border-radius: 5px;
`;

export const Thead = styled.thead`
background-color: blue;
color: white;
height: 40px;
`;

export const Tbody = styled.tbody`
text-align: center;
tr{
    background-color: whitesmoke;
  }
  tr:nth-child(odd){
  background-color: aliceblue;
}
`;

export const TrLine = styled.tr`
height: 30px;
font-size: 14px;
`;

export const Type = styled.td`
text-transform: capitalize;
`;




   

