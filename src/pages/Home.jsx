import ElevenLabs from "../components/ElevenLabs";
import useCounterStore from "../store/store";

export const Home = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increase}>Incrementar</button>
      <button onClick={decrease}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};
