import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';

export function useResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();

  const resetPassword = useCallback(
    async email => {
      setIsLoading(true);
      try {
        await sendPasswordResetEmail(auth, email);
        // eslint-disable-next-line no-shadow
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [auth],
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      resetPassword,
    }),
    [isLoading, error, resetPassword],
  );
}
