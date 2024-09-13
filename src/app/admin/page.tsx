"use client"
import AdminLayout from '@/layouts/AdminLayout';
import RichTextEditor from '@/components/RichTextEditor';
import { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [content, setContent] = useState<string>('');

  return (
    <AdminLayout>
      <h2>Welcome to the Admin Dashboard</h2>
      <RichTextEditor value={content} onChange={setContent} />
      <button onClick={() => console.log(content)}>Save Content</button>    </AdminLayout>
  );
};

export default AdminDashboard;