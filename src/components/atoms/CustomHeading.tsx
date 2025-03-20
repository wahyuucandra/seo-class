type Props = {
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
}

export const CustomHeading = ({ heading = 'h6', children, className }: Props) => {
  const Comp = heading
  return <Comp className={className}>{children}</Comp>
}
