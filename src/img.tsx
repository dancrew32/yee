import React from "react";

type PropsType = {
  src: string;
  ref: React.RefObject;
  onLoad: () => void;
};

function ImgInner(props) {
  return <img src={props.src} onLoad={props.onLoad} alt="" />;
}

export const Img = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <ImgInner {...props} />
  </div>
));
