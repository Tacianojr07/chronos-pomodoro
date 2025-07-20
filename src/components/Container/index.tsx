type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
