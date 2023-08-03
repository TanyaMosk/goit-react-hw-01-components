import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  padding-top: 20px;
  margin: auto;
  width: 240px;
  border-radius: 5px;
   box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
  display: flex;  
  flex-wrap: wrap;   
  justify-content: center;
  margin-bottom: 60px;
`;

export const Descript = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;  
    margin-bottom: 20px;  
`;

export const Image = styled.img`
border-radius: 50%;
border: 1px solid black;
width: 100px;
height: 100px;
`;

export const Paragraph = styled.p`
font-weight: ${props => (   
  props.className === 'name' ? '700' : '400'  
)};
color: ${props => (    
  props.className === 'name' ? 'black' : 'grey'  
)};
`;

export const Stats = styled.ul` 
  margin: auto;
  padding: 0;
  font-size: 10px;
  display: flex; 
  background-color: lightblue; 
  border-top: 1px solid black;
  border-radius:0 0 5px 5px; 
  :first-child{      
    border-right: 1px solid black;
  };   
  :last-child{    
    border-left: 1px solid black;    
  } 
`;

export const List = styled.li`
width: 80px;
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
gap: 10px;
:first-child{      
    border-right: none;
    font-size: 14px;
    color: gray;
  };   
  :last-child{    
    border-left: none;   
    font-size :14px;
    font-weight: 700;
  }
`;
