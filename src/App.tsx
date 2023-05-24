import type { Component } from 'solid-js';

import { createSignal } from 'solid-js';
import Board from './components/board/board';

const App: Component = () => {
  const [blockTop, setBlockTop] = createSignal([
    { color: 'blue', text: 'A' },
    { color: 'red', text: 'B' },
    { color: 'yellow', text: 'C' },
    { color: 'green', text: 'D' },
    { color: 'purple', text: 'E' },
    { color: 'orange', text: 'Y' },
    { color: 'pink', text: 'Z' }
  ]);
  return (
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Board/>
    </div>
  );
};

export default App;
