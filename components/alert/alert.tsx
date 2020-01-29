import * as React from "react";
import ModalCenter from "../modal-center/modal-center";
import "./alert.style.css";

interface ITextModalCenter {
  children: any;
}

const Alert = (props: ITextModalCenter) => (
  <ModalCenter>
    <div className="alert">
      {props.children}
    </div>
  </ModalCenter>
);

export default React.memo(Alert);
