import { TodosContainer } from "./components/TodosContainer";
import { Header } from "./layout/Header";

function App() {
  return (
    <div className='text-3xl'>
      <Header />
      <TodosContainer />
    </div>
  );
}

export default App;
