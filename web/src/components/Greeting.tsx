import { createSignal } from "solid-js";

const Greeting = ({ messages }: { messages: string[] }) => {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = createSignal(messages[0]);
  const [count, setCount] = createSignal(0);
  const increment = () => setCount((p) => p + 1);

  return (
    <div>
      <h3>{greeting()}! Thank you for visiting!</h3>
      <h3>{count()}! Thank you for visiting!</h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
};

export { Greeting };
