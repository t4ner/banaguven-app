import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Rating({
  rating,
  maxRating = 5,
  onRatingChange,
  size = 20,
  color = "#FCD34D",
  emptyColor = "#E5E7EB",
  showText = false,
  disabled = false,
  className = "",
}) {
  const handleStarPress = (starIndex) => {
    if (disabled || !onRatingChange) return;
    onRatingChange(starIndex + 1);
  };

  return (
    <View className={`flex-row items-center ${className}`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleStarPress(index)}
          disabled={disabled}
        >
          <Ionicons
            name={index < rating ? "star" : "star-outline"}
            size={size}
            color={index < rating ? color : emptyColor}
          />
        </TouchableOpacity>
      ))}

      {showText && (
        <Text className="text-gray-600 text-sm ml-2">
          ({rating}/{maxRating})
        </Text>
      )}
    </View>
  );
}


