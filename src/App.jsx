import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home} from './components/index';
import Layout from './Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without header/footer */}
        <Route path="/crew_login" element={<Login />} />

        {/* Routes with layout (Header/Footer stays the same) */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Home />} />
          {/* You can add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
