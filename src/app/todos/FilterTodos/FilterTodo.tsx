import { filter } from "@/features/todos/todosSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function FilterTodo() {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setFilterValue(e.target.value);
    dispatch(filter(e.target.value));
  }

  return (
    <>
      <input type="text" value={filterValue} onChange={handleChange} />
    </>
  );
}

export default FilterTodo;
