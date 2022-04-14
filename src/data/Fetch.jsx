import products from "./data";

export const CustomFetchFilter = (time, category) => {
  return new Promise((resolve,reject)=>{
    const filter=products.filter(items=>items.category===category);
    setTimeout(() => {
      category ? resolve(filter): resolve(products);
  }, time);
  })
}

export const CustomFetchFind = (time,id) => {
  return new Promise((resolve, reject) => {
      const find = products.find(
          (item) => item.id === parseInt(id)
      );
      setTimeout(() => {
          resolve(find);
      }, time);
  });
};