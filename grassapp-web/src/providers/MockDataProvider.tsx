import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_MOCK_STATE } from '@grassapp/shared-types';
import { setUser } from '../store/slices/auth';
import { useMockData } from '../hooks/useMockData';

const mockUser = {
  id: 'mock-user-1',
  email: 'mock@grassapp.com',
  name: 'Mock User',
  photoUrl: '/default-avatar.png',
  role: 'user',
};

export function MockDataProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { enabled } = useMockData();

  useEffect(() => {
    if (enabled) {
      // Set mock user data including GrassPoints
      dispatch(setUser({
        ...mockUser,
        grassPoints: DEFAULT_MOCK_STATE.mockUser.grassPoints
      }));
    } else {
      // Reset mock data when disabled
      dispatch(setUser(null));
    }
  }, [enabled, dispatch]);

  return <>{children}</>;
} 