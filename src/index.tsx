import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

type ShadowDOMComponentProps = PropsWithChildren<{
  wrapperElement?: React.ElementType
  shadowRootInit?: ShadowRootInit
  /**
   * 引入的样式文件路径，必须是构建后的路径
   */
  staticStylePath?: string
}>

const ShadowDOMComponent = ({
  children,
  wrapperElement = 'div',
  shadowRootInit,
  staticStylePath,
}: ShadowDOMComponentProps) => {
  const { shadowRootRef, root } = useShadowDOM(shadowRootInit, staticStylePath)
  const Wrapper = wrapperElement

  return <Wrapper ref={shadowRootRef}>{root && <ShadowContent root={root}>{children}</ShadowContent>}</Wrapper>
}

const useShadowDOM = (shadowInit?: ShadowRootInit, stylePath?: string) => {
  const containerRef = useRef<any>(null)
  const [root, setRoot] = useState(null)

  useEffect(() => {
    if (containerRef.current) {
      const shadowRoot = containerRef.current?.attachShadow(
        shadowInit || {
          mode: 'open',
        }
      )

      // 创建并插入样式
      if (stylePath) {
        const styleElement = document.createElement('style')
        styleElement.innerHTML = stylePath
        shadowRoot.appendChild(styleElement)
      }

      setRoot(shadowRoot)
    }
  }, [])

  return { shadowRootRef: containerRef, root }
}

function ShadowContent({ root, children }: PropsWithChildren<{ root: any }>) {
  return createPortal(children, root)
}

export default ShadowDOMComponent
