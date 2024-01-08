export const getLocalStorageItems = () => {
  const items = localStorage.getItem('todolist');
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};
