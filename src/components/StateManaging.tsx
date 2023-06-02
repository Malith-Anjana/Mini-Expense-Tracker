import { useState } from "react";

const StateManaging = () =>{
    const [count, setCount] = useState(0);
    
    const incrementCount = async () => {
      setCount(count + 1);
    }
    return(
            <div>
                <p>{count}</p>
              <p><button onClick={incrementCount}>Plus</button></p>
            </div>
    )
  }
  export default StateManaging;