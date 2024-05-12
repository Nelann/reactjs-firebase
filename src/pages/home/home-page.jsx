import { useItems } from "../../hooks";

import AddItem from "../../components/add-item";

export default function HomePage() {
  const { items, isLoading, error } = useItems();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erorr: {error.message}</div>;
  }

  return (
    <section>
      <div>
        <AddItem />
      </div>
      <div>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>
    </section>
  );
}
