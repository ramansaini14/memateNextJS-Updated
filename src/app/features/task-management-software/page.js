// 'use client';

// import AppWrapper from '../../../components/AppWrapper';
import TaskManagementPage from '../../../page-components/task-management';

export const metadata = {
  title: 'Task Management Software | MeMate',
  description: 'Discover the best task management software for your business. Streamline your task management with MeMate.',
}

export default function TaskManagement() {
  return (
    // <AppWrapper>
      <TaskManagementPage />
    // </AppWrapper>
  );
}