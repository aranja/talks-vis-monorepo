import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://api.github.com/users/snaerth');
      const data = await response.json();

      setUser({ id: data.id, name: data.name });
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    loading,
    error,
  };
};
