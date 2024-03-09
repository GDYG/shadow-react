import { createRoot } from "react-dom/client";
import ShadowDOMComponent from "./index";

function App() {
  return (
    <main>
      <ShadowDOMComponent>
        <div>xxxx</div>
        <p>hhhh</p>
        <h1>sssss</h1>
      </ShadowDOMComponent>
    </main>
  );
}

const container = document.getElementById("root");
if (container) {
  const render = createRoot(container);
  render.render(<App />);
}
