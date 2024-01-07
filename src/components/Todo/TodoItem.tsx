type TodoItem = {
  title: string;
  status: boolean;
};
export const TodoItem = ({ title, status }: TodoItem) => {
  return (
    <div
      className={
        'bg-[#f87171] rounded-md border-2 border-blue-950 m-1 p-2 w-80 flex justify-between'
      }
    >
      <h3>{title}</h3>
      <input type="checkbox" className="cursor-pointer" />
    </div>
  );
};
