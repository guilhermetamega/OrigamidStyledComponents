import PropsClass from "./components/PropsClass";
import PropsExercise from "./components/PropsExercise";
import Shop from "./components/Shop";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="App">
      <Title>Título funcional com Styled Components</Title>
      <Shop />
      <PropsClass />
      <PropsExercise />
    </div>
  );
}
