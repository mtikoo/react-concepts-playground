import { Routes, Route } from 'react-router-dom';
import ChapterLayout from '../../components/ChapterLayout';
import UserList from './UserList';
import UserDetail from './UserDetail';
import NotFound from './NotFound';

export default function Ch7() {
  return (
    <ChapterLayout
      title="Chapter 7: Routing"
      description="Nested routes, dynamic params, programmatic navigation, search params, and catch-all 404."
    >
      <div className="demo-section">
        <Routes>
          <Route index element={<UserList />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ChapterLayout>
  );
}
