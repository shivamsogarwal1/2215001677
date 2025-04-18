import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Feed from './pages/Feed';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';

export default function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
        <Link to="/">Feed</Link>
        <Link to="/top-users">Top Users</Link>
        <Link to="/trending">Trending Posts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
      </Routes>
    </Router>
  );
}
