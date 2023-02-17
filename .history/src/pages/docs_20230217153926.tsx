import { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";

interface IProgress {
  num: number,
  data: Array<number>,
}

const DocsPage = (props: IProgress) => {
  const [current, Setcurrent] = useState<string>('苑妮妮')
  return (
    <div>
      <p onClick={()=>{
     
      }}>my name is{current}</p>
    </div>
  );
};

export default DocsPage;
