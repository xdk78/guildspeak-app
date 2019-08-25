import styled, { css } from 'styled-components'

const fonts = {
  robotoRegular: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
  robotoMedium: require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
  robotoLight: require('../assets/fonts/Roboto/Roboto-Light.ttf'),
  francoisOneRegular: require('../assets/fonts/Francois_One/FrancoisOne-Regular.ttf')
}

export const style = css`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.robotoRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${fonts.robotoMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${fonts.robotoLight}) format('truetype');
  }
  @font-face {
    font-family: 'Francois One';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.francoisOneRegular}) format('truetype');
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    background: #202020;
    color: #ffffff;
    overflow: hidden;
  }
`

export const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
`
