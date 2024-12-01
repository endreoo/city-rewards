import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { HotelsPage } from './pages/HotelsPage';
import { RewardsPage } from './pages/RewardsPage';
import { AccountPage } from './pages/AccountPage';
import { HotelDetailPage } from './pages/HotelDetailPage';
import { PartnersPage } from './pages/PartnersPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/hotels/:id" element={<HotelDetailPage />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/partners" element={<PartnersPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;