export const handleRemoveElement = (
  index: number,
  data: any[],
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const updatedData = [...data];
  updatedData.splice(index, 1);
  setData(updatedData);
};
