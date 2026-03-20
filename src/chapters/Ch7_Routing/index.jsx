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
        <h3>How to study this chapter</h3>
        <p>
          This chapter is a mini app inside your app. Begin with list navigation,
          observe query-string filtering, then open dynamic detail routes and
          test invalid paths to understand 404 handling.
        </p>
        <p>
          Focus on the relationship between URL and UI state. In robust React
          apps, URLs are not just navigation targets; they are shareable,
          restorable state that users can bookmark and revisit.
        </p>
      </div>
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
