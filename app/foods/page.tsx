"use client";

import { useState } from "react";
import FoodItem from "./FoodItem";
import Searchbox from "@/components/Searchbox";
import { IFood, CATEGORIES } from "./models/Food";

const FOODS: IFood[] = [
  {
    id: 1,
    name: "Chicken Salad",
    price: 220,
    category: "healthy",
  },
  {
    id: 2,
    name: "Beef Burger",
    price: 320,
    category: "fast food",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: 280,
    category: "Italian",
  },
  {
    id: 4,
    name: "Sushi Box",
    price: 450,
    category: "Japanese",
  },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | (typeof CATEGORIES)[number]
  >("all");

  // derive filtered data from source + filters
  const filteredFoods = FOODS.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ? true : food.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      {/* top controls */}
      <div className="flex flex-wrap items-center gap-4">
        <Searchbox
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-sm border ${
              selectedCategory === "all"
                ? "bg-amber-300 border-amber-300"
                : "bg-white"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-sm border capitalize ${
                selectedCategory === cat
                  ? "bg-amber-300 border-amber-300"
                  : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* list */}
      <div className="grid grid-cols-3 gap-6 mt-5">
        {filteredFoods.length === 0 ? (
          <p className="bg-blue-200 text-blue-700 border border-blue-200 rounded-sm p-3 col-span-3">
            {searchTerm
              ? `No meals found for "${searchTerm}"`
              : "No meals available"}
          </p>
        ) : (
          filteredFoods.map((item) => <FoodItem key={item.id} food={item} />)
        )}
      </div>
    </div>
  );
};

export default Page;
