// components/CodeBlockRenderer.tsx
'use client'

import type { ReactElement, ReactNode } from 'react'
import Pre from 'pliny/ui/Pre'
import Mermaid from './Mermaid'

const extractTextFromChildren = (children: ReactNode): string => {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(extractTextFromChildren).join('')
  if (children !== null && typeof children === 'object' && 'props' in children) {
    const element = children as ReactElement<{ children?: ReactNode }>
    return extractTextFromChildren(element.props.children)
  }
  return String(children || '')
}

const CodeBlockRenderer = ({ children, ...props }) => {
  if (children?.props?.className?.includes('language-mermaid')) {
    const rawText = extractTextFromChildren(children.props.children)
    return <Mermaid chart={rawText.trim()} />
  }
  return <Pre {...props}>{children}</Pre>
}

export default CodeBlockRenderer
