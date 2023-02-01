import Formbuilder from './Pages/Formbuilder';
import './css/app.css'
import { Routes, Route } from 'react-router-dom';
import FormPersenter from './Pages/FormPersenter';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Formbuilder />} />
        <Route path='/formPresenter' element={<FormPersenter />} /> 
      </Routes>

    </div>
  );
}

export default App;
