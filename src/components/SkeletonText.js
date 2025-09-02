import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonText({
  lines = 3,
  lineHeight = 20,
  spacing = 8,
  className = "",
}) {
  return (
    <View className={className}>
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton
          key={index}
          height={lineHeight}
          width={index === lines - 1 ? "75%" : "100%"}
          className={index < lines - 1 ? "mb-2" : ""}
        />
      ))}
    </View>
  );
}


