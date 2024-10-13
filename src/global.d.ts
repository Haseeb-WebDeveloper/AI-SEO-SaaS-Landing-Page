declare namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        autoplay?: boolean;
        loop?: boolean;
        src?: string;
      };
    }
  }
  
  // Declare the global type for HTMLDotLottiePlayerElement
  declare global {
    interface HTMLDotLottiePlayerElement extends HTMLElement {
      play: () => void;
      stop: () => void;
    }
  }
  