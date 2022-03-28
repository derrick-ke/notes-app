import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import { NoteProvider } from './context/NoteContext';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

function App() {
  return (
    <NoteProvider>
      <Router>
        <div className=' text-lg tracking-wide'>
          <Header />
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <NoteForm />
                  <NoteList />
                </>
              }
            />
            <Route path='/about' exact element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </NoteProvider>
  );
}

export default App;
