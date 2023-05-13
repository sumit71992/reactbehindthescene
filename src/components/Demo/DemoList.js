import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const asc = [...props.items];
  const desc = [...props.items];

  const ascSortedList = useMemo(() => {
    console.log("Items asc sorted");
    return asc.sort((a, b) => a - b);
  }, [props.items]);

  const descSortedList = useMemo(() => {
    console.log("Items desc sorted");
    return desc.sort((a, b) => b - a);
  }, [props.items]);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2></h2>
      <ul>
        {props.desc
          ? descSortedList.map((item) => <li key={item}>{item} k</li>)
          : ascSortedList.map((item) => <li key={item}>{item} y</li>)}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
