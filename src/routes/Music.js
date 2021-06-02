import React, { useState } from "react";

import MultiView from "../components/MultiView";
import SingleView from "../components/SingleView"


export default function Music(props) {
  const [singleView, setSingleView] = useState(false)
  const [title, setTitle] = useState("")
  const [loc, setLoc] = useState("")
  return (
    <div>
      {singleView
        ? <SingleView title={title} loc={loc} />
        : <MultiView change={setSingleView} setTitle={setTitle} setLoc={setLoc} />
      }
    </div >
  );
}
