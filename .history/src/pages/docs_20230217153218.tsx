import { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";

interface IProgress {
  num: String,
  data: Array<number>,
}

const DocsPage = (props: IProgress) => {
  const current = useState<String>(props.num)
  return (
    <div>
      <p>my name is xxx</p>
    </div>
  );
};

export default DocsPage;
