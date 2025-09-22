import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../services/categoryService";

export default function useCategories() {
  const { data, isPending: categoriesPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  const { categories: rawCategories = [] } = data || {};
  const categories = rawCategories.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    value: item.englishTitle,
    label: item.title,
  }));

  return { categories, transformedCategories, categoriesPending };
}
