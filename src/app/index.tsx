import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategoryChange(category: string) {
    setCategory(category);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça o seu pedido" cartQuantityItems={5} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategoryChange(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
