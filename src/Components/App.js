import { useState, useEffect } from "react";
import * as api from "../external/index";

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const itemFromAPI = await api.fetch.gjallahorn();
      setItem(itemFromAPI);
    };

    getItem();
  }, []);

  return <div className="App">Hello {console.log(item)}</div>;
}

export default App;
