import clsx from "clsx"
import { ClassValue } from "clsx"
import { FC, JSX, ReactNode } from "react"

type BlockProps = {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode
  className?: ClassValue
}


export const Block: FC<BlockProps> = ({ as: Tag = 'div', children, className, ...props }) => {
  return <Tag className={clsx(className)} {...props}>{children}</Tag>
}