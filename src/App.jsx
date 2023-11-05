import { Provider } from "react-redux";
import store from "./Component/store";
import AddTask from "./Component/AddTask";
import ListTask from "./Component/ListTask";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo Application</h1>
        <AddTask />
        <h2>Tasks:</h2>
        <ListTask filterDone={false} />
        <h2>Completed Tasks:</h2>
        <ListTask filterDone={true} />
      </div>
    </Provider>
  );
};

export default App;
