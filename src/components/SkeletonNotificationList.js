import React from "react";
import { View } from "react-native";
import SkeletonNotificationItem from "./SkeletonNotificationItem";

export default function SkeletonNotificationList({
  count = 5,
  className = "",
}) {
  return (
    <View className={className}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonNotificationItem
          key={index}
          className={index < count - 1 ? "mb-3" : ""}
        />
      ))}
    </View>
  );
}






