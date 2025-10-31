import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';

function App() {
  return (
    <BrowserRouter>

        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Przekierowanie z głównej strony na /signin */}
            <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;