import styled from 'styled-components'

export const Section = styled.section`
background-color: white; 
  margin: auto;
  width: 300px; 
   box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
  display: flex;  
  flex-wrap: wrap;   
  justify-content: center;
`;

export const StatList = styled.ul`  
  display: flex;   
  justify-content: space-between;
`;

const getBackgroundColor = props => {
    // eslint-disable-next-line
    switch(props.color) { 
        case ".docx":
            return 'blue';
        case ".pdf":
            return 'purple';
        case ".mp3":
            return 'red';
        case ".psd":
            return 'green';
    }    
}

export const ListItem = styled.li`
width: 60px;
padding: 15px 10px;
display: flex;
flex-direction: column;
align-items: center;
background-color:${getBackgroundColor};
`;