import { createRoot } from 'react-dom/client'
import ShadowDOMComponent from './index'
import './main.css'
import './utils/dynamicFontSize'

function App() {
  return (
    <main>
      <h1 className="text-[40px]">123123123</h1>
      <p>12312312331232</p>
      <ShadowDOMComponent>
        <div>xxxx</div>
        <p>hhhh</p>
        <h1>sssss</h1>
      </ShadowDOMComponent>
    </main>
  )
}

const container = document.getElementById('root')
if (container) {
  const render = createRoot(container)
  render.render(<App />)
}
