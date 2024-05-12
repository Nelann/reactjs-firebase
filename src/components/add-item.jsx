import { useState } from "react";

import { useCreateItem } from "@/hooks";

import { Button } from "./ui/button";

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
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="item">Item</label>
          <input
            id="item"
            type="text"
            placeholder="Add item"
            className="border border-gray-300 rounded-md p-2"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <Button title="Add" disabled={isPending}>
          {isPending ? "Loading..." : "Add"}
        </Button>
      </div>
    </form>
  );
}
