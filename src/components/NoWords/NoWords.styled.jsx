import styled from 'styled-components';
import background from 'images/vivid-blurred-colorful-background.jpg';


export const Title = styled.h2`
  margin-bottom: 30px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-color: #b4edc2;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
