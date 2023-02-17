import { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";

interface IProgress {
  num: number,
  data: Array<number>,
}

const DocsPage = (props: IProgress) => {
  const current = useState(props.num):Number
  return (
    <div>
      <p>my name is xxx</p>
    </div>
  );
};

export default DocsPage;
