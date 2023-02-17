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
        Setcurrent(!current)
      }}>{!current}爱{current ? "张浩明" : '苑妮妮'}</p>
    </div>
  );
};

export default DocsPage;
