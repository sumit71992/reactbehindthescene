import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [descending, setDescending] = useState(false);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const descendingOrderHandler = useCallback(() => {
    setDescending(true);
  }, [descending]);

  const ascendingOrderHandler = useCallback(() => {
    setDescending(false);
  }, [descending]);

  return (
    <div className="app">
      <DemoList items={listItems} desc={descending} />
      <Button onClick={ascendingOrderHandler}>Change to Ascending Order</Button>
      <Button onClick={descendingOrderHandler}>
        Change to Descending Order
      </Button>
    </div>
  );
}

export default App;
