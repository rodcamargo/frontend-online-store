export const getCategories = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchCategories = await fetch(url);
  const data = await fetchCategories.json();
  return data;
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchGetProducts = await fetch(url);
  const data = await fetchGetProducts.json();
  return data;
};
