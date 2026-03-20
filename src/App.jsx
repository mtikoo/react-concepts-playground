import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Ch1 from './chapters/Ch1_StateAndProps';
import Ch2 from './chapters/Ch2_FilterMapReduce';
import Ch3 from './chapters/Ch3_Hooks';
import Ch4 from './chapters/Ch4_Context';
import Ch5 from './chapters/Ch5_AsyncPatterns';
import Ch6 from './chapters/Ch6_CustomHooks';
import Ch7 from './chapters/Ch7_Routing';
import Ch8 from './chapters/Ch8_FormsAndEvents';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

function ChapterLayout() {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/ch1" element={<Ch1 />} />
          <Route path="/ch2" element={<Ch2 />} />
          <Route path="/ch3" element={<Ch3 />} />
          <Route path="/ch4" element={<Ch4 />} />
          <Route path="/ch5" element={<Ch5 />} />
          <Route path="/ch6" element={<Ch6 />} />
          <Route path="/ch7/*" element={<Ch7 />} />
          <Route path="/ch8" element={<Ch8 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<ChapterLayout />} />
    </Routes>
  );
}
