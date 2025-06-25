/// <reference types="vite/client" />

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const pngContent: string;
  export default pngContent;
}

declare module "*.jpg" {
  const jpgContent: string;
  export default jpgContent;
}

declare module "*.woff2" {
  const woff2Content: string;
  export default woff2Content;
}
