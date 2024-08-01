export const IDs: string[] = [];

export const checkId = (id: string): string => {
  const isId = IDs.length ? IDs.find((el: string) => el === id) : false;
  if (isId) {
    throw new Error(`${id} is already exist.`);
  } else {
    IDs.push(id);
  }
  return id;
};
