import styled, { createGlobalStyle } from 'styled-components';

export const HEADER_HEIGHT = '70px';
export const FOOTER_HEIGHT = '50px';

const GLobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    overflow: hidden !important;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export const RootWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  overflow-y: auto;
  margin-top: ${HEADER_HEIGHT};
`;

export default GLobalStyle;
