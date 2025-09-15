import React from "react";
import { View } from "react-native";
import SkeletonCard from "./SkeletonCard";

export default function SkeletonList({ count = 5, className = "" }) {
  return (
    <View className={className}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard key={index} className={index < count - 1 ? "mb-3" : ""} />
      ))}
    </View>
  );
}






