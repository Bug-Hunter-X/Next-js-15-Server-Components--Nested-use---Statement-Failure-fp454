// Solution:  Restructure components to reduce nesting of use() statements.
import { Suspense } from 'react';

function useData() {
  // ... your data fetching logic
}

function ComponentB() {
  const data = useData();
  return <div>Data: {JSON.stringify(data)}</div>;
}

function ComponentA() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentB />
    </Suspense>
  );
}
export default ComponentA;