import { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";

interface IProgress {
  num: number,
  data: Array<number>,
}

const DocsPage = (props: IProgress) => {
  const [current, Setcurrent] = useState<boolean>(false)
  return (
    <div>
      <p onClick={() => {
        Setcurrent('张浩明')
      }}>my name is{current}</p>
    </div>
  );
};

export default DocsPage;
