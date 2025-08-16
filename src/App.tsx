

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';

// Pages
import Onboarding from './Onboarding';
import Welcome from './pages/Welcome';
import BusinessInfo from './pages/BusinessInfo';
import Terms from './pages/Terms';
import ConnectServices from './pages/ConnectServices';
import Analyzing from './pages/Analyzing';
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Notices from './pages/Notices';
import NoticeDetail from './pages/NoticeDetail';
import Insight from './pages/Insight';
import InsightDetail from './pages/InsightDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/notices/:id" element={<NoticeDetail />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/business-info" element={<BusinessInfo />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/connect-services" element={<ConnectServices />} />
        <Route path="/connect-services-modal" element={<ConnectServices showModal={true} />} />
        <Route path="/analyzing" element={<Analyzing />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/insight/:id" element={<InsightDetail />} />
        
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
