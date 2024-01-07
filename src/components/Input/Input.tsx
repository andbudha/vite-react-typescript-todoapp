// @flow

type Input = {};
export const Input = (props: Input) => {
  return (
    <div className="input-container">
      <input
        className="input rounded-md border-2 border-blue-950 m-1 p-2 w-80"
        placeholder="Add new todo..."
        type="text"
      />
    </div>
  );
};
