import React from 'react';
import TabControlSimple from './components/tab-control-simple';
import TabControlAdvanced from './components/tab-control-advanced';
import './App.scss';

const tabsSimple = [
  {
    id: 1,
    header: 'Вкладка 1',
    content: (
      <div>
        <p>
          Содержимое первой вкладки
        </p>
      </div>
    )
  },
  {
    id: 2,
    header: 'Вкладка 2',
    content: (
      <div>
        <p>
          Содержимое второй вкладки
        </p>
      </div>
    )
  },
  {
    id: 3,
    header: 'Вкладка 3',
    content: (
      <div>
        <p>
          Содержимое третьей вкладки
        </p>
      </div>
    )
  }
];


const tabsAdvanced = {
  1: {
    id: 1,
    header: 'Вкладка 1',
    content: (
      <div>
        <p>
          Содержимое первой вкладки
        </p>
      </div>
    )
  },
  2: {
    id: 2,
    header: 'Вкладка 2',
    content: (
      <div>
        <p>
          Содержимое второй вкладки
        </p>
      </div>
    )
  },
  3: {
    id: 3,
    header: 'Вкладка 3',
    content: (
      <div>
        <p>
          Содержимое третьей вкладки
        </p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="app">
      <div className="app__tab-control">
        <TabControlSimple tabs={tabsSimple} />
      </div>
      <div className="app__tab-control">
        <TabControlAdvanced tabs={tabsAdvanced} defaultActive={1} />
      </div>
    </div>
  );
}

export default App;
