import { useItems } from "@/hooks";

import AddItem from "@/components/add-item";

export default function PostsPage() {
  const { items, isLoading, error } = useItems();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erorr: {error.message}</div>;
  }

  return (
    <section>
      <div className="mb-3">
        <AddItem />
      </div>
      <div>
        <ul className="list-inside list-decimal">
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
