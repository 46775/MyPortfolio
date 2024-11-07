import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="justify-center align-middle flex w-screen h-screen bg-black ">
        <h1 className="h-screen w-3/5 bg-black font-mono text-green-300 text-center justify-center p-5 ">
          hello world
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          natus, eos dolorum iusto voluptatem iure, enim temporibus modi porro
          esse tempore inventore mollitia repudiandae? Totam cumque maiores
          voluptatem ut nihil odit eos voluptates dolores saepe excepturi
          incidunt necessitatibus molestias, praesentium accusantium cum beatae
          qui autem quasi deserunt rerum consequatur! Voluptas, placeat. Minus
          porro quo tempora dolorum nulla, reprehenderit modi voluptatem quos
          non! Voluptate excepturi dolores non. Sed sequi temporibus aut ex
          perferendis laudantium ut vel, voluptas ad ipsum ipsa repudiandae, eum
          animi deleniti esse cum atque hic rem repellat veniam tenetur.
          Eveniet, animi. Velit qui, repellat tempora et ipsam sequi.
        </h1>
      </div>
    </>
  );
}

export default App;
