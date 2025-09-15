import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function SkeletonChat({ messages = 5, className = "" }) {
  return (
    <View className={className}>
      {Array.from({ length: messages }, (_, index) => (
        <View
          key={index}
          className={`flex-row mb-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
        >
          <View
            className={`max-w-[80%] ${index % 2 === 0 ? "items-end" : "items-start"}`}
          >
            <Skeleton
              height={40}
              width={Math.random() * 100 + 100}
              borderRadius={20}
            />
          </View>
        </View>
      ))}
    </View>
  );
}






