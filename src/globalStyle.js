import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    
    * {
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 14px Montserrat, sans-serif;
    }
    #root {
        /* max-width: 1020px; */
        margin: 0 auto;
        /* padding: 0 20px 50px; */
    }
    button {
        cursor: pointer;
    }
`;