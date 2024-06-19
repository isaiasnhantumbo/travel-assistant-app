import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
:root{
  --animate-duration: 2s;
}
body{
  font: 16px "Raleway", Arial, sans-serif;
  color: #E7E7EB;
  background: #100e1d;
}
.places-container {
  /* position: absolute;
  top: 10px;
  left: 50%; */
  /* transform: translateX(-50%);
  z-index: 10; */
  width: 300px;
}

.map-container {
  width: 100%;
  height: 100vh;
}

.combobox-input {
  width: 100%;
  padding: 0.5rem;
}

button{
  border: none;
}
html{
    @media (max-width:1080px){
        font-size: 93.75%;
    }
    @media (max-width:1366px){
        font-size: 87.5%;
    }
    @media (max-width:720px){
        font-size: 81.25%;
    }
}
`;
