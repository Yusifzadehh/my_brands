declare module "react-inner-image-zoom" {
    import React from "react";
  
    interface InnerImageZoomProps {
      src: string;
      zoomSrc?: string;
      zoomType?: "hover" | "click" | "doubleClick";
      zoomScale?: number;
      alt?: string;
      width?: number;
      height?: number;
      hasSpacer?: boolean;
      fadeDuration?: number;
      fullscreenOnMobile?: boolean;
      mobileBreakpoint?: number;
      className?: string;
    }
  
    const InnerImageZoom: React.FC<InnerImageZoomProps>;
    export default InnerImageZoom;
  }
  