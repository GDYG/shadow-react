import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

const ShadowDOMComponent = ({ children }: PropsWithChildren) => {
  const { shadowRootRef, root } = useShadowDOM()

  return <div ref={shadowRootRef}>{root && <ShadowContent root={root}>{children}</ShadowContent>}</div>
}

const useShadowDOM = () => {
  const containerRef = useRef(null)
  const [root, setRoot] = useState(null)

  useEffect(() => {
    if (containerRef.current) {
      const shadowRoot = (containerRef.current as any).attachShadow({
        mode: 'open',
      })

      // 创建并插入样式
      // const styleElement = document.createElement("style");
      // styleElement.innerHTML = tailwindStyles;
      // shadowRoot.appendChild(styleElement);

      // const linkElem = document.createElement('link');
      // linkElem.setAttribute('rel', 'stylesheet');
      // linkElem.setAttribute('href', 'https://cdn.tailwindcss.com');
      // shadowRoot.appendChild(linkElem);

      setRoot(shadowRoot)
    }
  }, [])

  return { shadowRootRef: containerRef, root }
}

function ShadowContent({ root, children }: PropsWithChildren<{ root: any }>) {
  return createPortal(children, root)
}

export default ShadowDOMComponent
