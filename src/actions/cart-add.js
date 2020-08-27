export const addToCart = (item) => {
  console.log("ADDDING ITEM>>>>", item);

  return {
    type: "add",
    item,
  };
};
