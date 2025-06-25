// Font Loader Utility
// This file ensures that fonts are loaded properly

// Import Gilroy fonts
import OhnoSoftieRegular from "../assets/fonts/OhnoSoftie-Regular.woff2";
import OhnoSoftieBold from "../assets/fonts/OhnoSoftie-Bold.woff2";
import GilroyRegularWoff2 from "../assets/fonts/Gilroy-Regular.woff2";
import GilroyRegularWoff from "../assets/fonts/Gilroy-Regular.woff";
import GilroyRegularTTF from "../assets/fonts/Gilroy-Regular.ttf";
import GilroyMediumWoff2 from "../assets/fonts/Gilroy-Medium.woff2";
import GilroyMediumWoff from "../assets/fonts/Gilroy-Medium.woff";
import GilroyMediumTTF from "../assets/fonts/Gilroy-Medium.ttf";
import GilroyBoldWoff2 from "../assets/fonts/Gilroy-Bold.woff2";
import GilroyBoldWoff from "../assets/fonts/Gilroy-Bold.woff";
import GilroyBoldTTF from "../assets/fonts/Gilroy-Bold.ttf";

// This function creates font-face CSS and injects it into the document
export const loadFonts = () => {
  const fontFaces = `
    /* Ohno Softie Font Family */
    @font-face {
      font-family: 'Ohno Softie';
      src: url('${OhnoSoftieRegular}') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Ohno Softie';
      src: url('${OhnoSoftieBold}') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    
    /* Gilroy Font Family */
    @font-face {
      font-family: 'Gilroy';
      src: url('${GilroyRegularWoff2}') format('woff2'),
           url('${GilroyRegularWoff}') format('woff'),
           url('${GilroyRegularTTF}') format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Gilroy';
      src: url('${GilroyMediumWoff2}') format('woff2'),
           url('${GilroyMediumWoff}') format('woff'),
           url('${GilroyMediumTTF}') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Gilroy';
      src: url('${GilroyBoldWoff2}') format('woff2'),
           url('${GilroyBoldWoff}') format('woff'),
           url('${GilroyBoldTTF}') format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  `;

  // Create a style element
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.appendChild(document.createTextNode(fontFaces));

  // Append to head
  document.head.appendChild(style);
};

// Export font URLs for preloading
export const fontUrls = {
  ohnoSoftieRegular: OhnoSoftieRegular,
  ohnoSoftieBold: OhnoSoftieBold,
  gilroyRegular: GilroyRegularWoff2,
  gilroyMedium: GilroyMediumWoff2,
  gilroyBold: GilroyBoldWoff2,
};
