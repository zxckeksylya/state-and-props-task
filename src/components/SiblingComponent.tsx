import { useState } from 'react';

export const Sibling = () => {
  const [text, setText] = useState('какой-то текст');
  const [isTouched, setIsTouched] = useState(false);
  const changeText = () => {
    if (!isTouched) {
      setText('REDEV');
      setIsTouched(true);
    }
  };

  return (
    <>
      <div>Текущий текст: {text}</div>
      <button onClick={changeText}>Изменить текст</button>
    </>
  );
};
