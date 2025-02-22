import { useState } from 'react';
import { Child } from './ChildComponent';
import styled from 'styled-components';
import { Sibling } from './SiblingComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  width: 100%;
`;

export function Parent() {
  const [counter, setCounter] = useState(0);

  const inctiment = () => {
    setCounter(counter + 1);
  };

  const dicrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const randCount = () => {
    setCounter(Math.ceil(Math.random() * 10));
  };

  return (
    <Container>
      <div>Счетчик {counter}</div>
      <ButtonGroup>
        <Button type='button' onClick={inctiment}>
          +
        </Button>
        <Button type='button' onClick={dicrement}>
          -
        </Button>
      </ButtonGroup>
      <Button type='button' onClick={reset}>
        reset
      </Button>
      <Button type='button' onClick={randCount}>
        random
      </Button>
      <Child name='Егор' counter={counter} />
      <Sibling />
    </Container>
  );
}
