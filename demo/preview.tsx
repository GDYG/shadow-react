import { createRoot } from 'react-dom/client'
import ShadowDOMComponent from '../src/index'
import './main.css'
import './utils/dynamicFontSize'

function App() {
  const style = `p {
      background-color: #333;
      border-radius: 3px;
      color: #fff;
      padding: 5px;
  }
  h1 {
      color: #f00;
  }
  `

  return (
    <main>
      <h1 className="text-[40px]">全局样式+TailwindCSS</h1>
      <p>全局样式</p>
      <ShadowDOMComponent>
        <style>{style}</style>
        <h1>隔离样式h1</h1>
        <p>隔离样式p</p>
      </ShadowDOMComponent>
    </main>
  )
}

const container = document.getElementById('root')
if (container) {
  const render = createRoot(container)
  render.render(<App />)
}
