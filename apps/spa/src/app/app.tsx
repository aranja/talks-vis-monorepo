import { useUser } from '../hooks/useUser';

export function App() {
  const { user, loading, error } = useUser();

  console.log({ user, loading, error });
  return <div>Hello VÍS</div>;
}

export default App;
