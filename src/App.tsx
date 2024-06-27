
import './App.css';
import { MantineProvider, Container } from '@mantine/core';
import MaxMinProductionTable from './components/MaxMinProductionTable';
import AverageYieldAreaTable from './components/AverageYieldAreaTable';

const App = () => {
  return (
    <MantineProvider>
      <Container>
        <div className='table-wrapper'>
          <h1>Indian Agriculture Data Analysis</h1>
          <MaxMinProductionTable />
          <AverageYieldAreaTable />
        </div>
      </Container>

    </MantineProvider>
  );
};

export default App;
