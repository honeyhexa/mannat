export default function Text({ children, ...rest }: any) {
  return <span {...rest}>{children}</span>;
}
