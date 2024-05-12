import { useState } from "react";
import { useCreateItem } from "../hooks";

export default function AddItem() {
  const [item, setItem] = useState("");

  const { createItem, isPending } = useCreateItem();

  const handleSubmit = async (e) => {
    e.preventDefault();

    createItem(item);

    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button disabled={isPending}>{isPending ? "Loading..." : "Add"}</button>
    </form>
  );
}
