import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonGallery({
  columns = 3,
  count = 6,
  className = "",
}) {
  const itemsPerRow = Math.ceil(count / columns);

  return (
    <View className={className}>
      {Array.from({ length: itemsPerRow }, (_, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between mb-3">
          {Array.from({ length: columns }, (_, colIndex) => {
            const itemIndex = rowIndex * columns + colIndex;
            if (itemIndex >= count) return null;

            return (
              <Skeleton
                key={itemIndex}
                width="30%"
                height={120}
                borderRadius={8}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}


