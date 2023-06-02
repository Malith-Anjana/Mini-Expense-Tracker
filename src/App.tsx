import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ExpenseTracker from "./expense-tracker/ExpenseTracker";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  let items = ["New York", "London", "Tokyo", "Paris", "San Francisco"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="m-3">
      {/* {alertVisibility && (
        <Alert onClose={()=> setAlertVisibility(false)}>
          Hello <span>there!</span>
        </Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Click Here
      </Button>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}

      <ExpenseTracker/>
    </div>
  );
}

export default App;
