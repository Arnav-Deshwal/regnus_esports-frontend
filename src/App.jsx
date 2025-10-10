import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header , Footer, Register} from './components/index';
import Middle from './components/middle/Middle';
import Layout from './Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with layout (Header/Footer stays the same) */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Middle />} />
          <Route path="/register" element={<Register />} />
          {/* You can add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
