import { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";

interface IProgress {
  num: number,
  data: Array<number>,
}

const DocsPage = (props: IProgress) => {
  const current = useState<String>('苑妮妮')
  return (
    <div>
      <p>my name is</p>
    </div>
  );
};

export default DocsPage;
