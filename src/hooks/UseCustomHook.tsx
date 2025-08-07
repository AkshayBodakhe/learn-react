import React from 'react';
import useFetchData from './CustomHook';
function MyComponent() {
  const { data, loading, error } = useFetchData('https://api.example.com/data');
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default MyComponent;
