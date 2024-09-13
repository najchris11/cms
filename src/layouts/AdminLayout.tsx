import React, { ReactNode } from 'react';
import Header from '@/components/Header';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '200px', backgroundColor: '#333', color: '#fff' }}>
        <nav>
          <ul>
            <li><a href="/admin">Dashboard</a></li>
            <li><a href="/admin/posts">Manage Posts</a></li>
            <li><a href="/admin/pages">Manage Pages</a></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </aside>
      <div style={{ flex: 1, padding: '20px' }}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;