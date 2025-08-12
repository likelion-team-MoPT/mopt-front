

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';

// Pages
import Onboarding from './Onboarding';
import Welcome from './pages/Welcome';
import BusinessInfo from './pages/BusinessInfo';
import Terms from './pages/Terms';
import ConnectServices from './pages/ConnectServices';
import Analyzing from './pages/Analyzing';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/business-info" element={<BusinessInfo />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/connect-services" element={<ConnectServices />} />
        <Route path="/connect-services-modal" element={<ConnectServices showModal={true} />} />
        <Route path="/analyzing" element={<Analyzing />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;