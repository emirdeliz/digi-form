import * as React from "react";
import "./title.style.css";

interface ITitle {
  children: any;
}

const Title = (props: ITitle) => (
  <h1 className="title">{props.children}</h1>
);

export default React.memo(Title);
