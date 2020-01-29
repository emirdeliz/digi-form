import * as React from "react";
import "./modal-center.style.css";

interface IModalCenter {
  children: any;
}

const ModalCenter = (props: IModalCenter) => (
  <div className="modal-center">{props.children}</div>
);

export default React.memo(ModalCenter);
