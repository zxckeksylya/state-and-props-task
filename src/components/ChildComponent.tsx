interface ChildProps {
  name: string;
  counter: number;
}

export function Child({ name, counter }: ChildProps) {
  return (
    <>
      Привет, {name}! Текущий счетчик: {counter}
    </>
  );
}
