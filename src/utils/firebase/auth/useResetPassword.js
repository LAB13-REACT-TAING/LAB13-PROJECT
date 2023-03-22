import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { auth } from './index';

export function useResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetPassword = useCallback(async email => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      resetPassword,
    }),
    [isLoading, error, resetPassword],
  );
}
