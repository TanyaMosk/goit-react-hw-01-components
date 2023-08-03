import styled from 'styled-components'

export const List = styled.ul`
 background-color: white;
  padding:10px;
  margin: auto;
  width: 300px;
  border-radius: 5px;
   box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
  display: flex;  
  align-items: center;  
  gap: 20px; 
  margin-bottom: 20px;
  `;

export const Icon = styled.span`
color:${props =>(props.children.props.status === 'true' ? "green" : "red")}
`;


