import React from "react";
import { View, Text, ActivityIndicator, Modal } from "react-native";

export default function LoadingOverlay({
  visible,
  message = "Yükleniyor...",
  transparent = true,
}) {
  return (
    <Modal visible={visible} transparent={transparent} animationType="fade">
      <View className="flex-1 bg-black bg-opacity-50 items-center justify-center">
        <View className="bg-white rounded-lg p-6 items-center">
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text className="text-gray-600 mt-4 text-center">{message}</Text>
        </View>
      </View>
    </Modal>
  );
}






