import{Person} from "./components/person";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { List } from "./components/list";
import './App.css';

function App() {
  return (
    <>
      <Person name="John" age="30" />
      <Button text="Click me!" onClick={() => console.log("Button clicked")} />
      <Header title="Welcome to my website!" />
      <List items={['apple', 'banana', 'orange']} />
    </>
  );
}

export default App;
