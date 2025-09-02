import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function LoadingSpinner({
  message = "Yükleniyor...",
  size = "large",
}) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size={size} color="#3B82F6" />
      <Text className="text-gray-600 mt-4 text-center">{message}</Text>
    </View>
  );
}


