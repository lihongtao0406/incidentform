import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncidentReportForm from './SurveyForm';
import SuccessPage from './SuccessPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IncidentReportForm />}/>
        <Route path="/success" element={<SuccessPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
