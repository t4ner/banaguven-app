import React from "react";
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Modal({
  visible,
  onClose,
  title,
  children,
  showCloseButton = true,
  animationType = "slide",
  transparent = true,
  className = "",
}) {
  return (
    <RNModal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black bg-opacity-50 items-center justify-center px-6">
          <TouchableWithoutFeedback>
            <View
              className={`bg-white rounded-lg w-full max-h-[80%] ${className}`}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
                  {title && (
                    <Text className="text-xl font-bold text-gray-800 flex-1">
                      {title}
                    </Text>
                  )}
                  {showCloseButton && (
                    <TouchableOpacity onPress={onClose} className="ml-4">
                      <Ionicons name="close" size={24} color="#6B7280" />
                    </TouchableOpacity>
                  )}
                </View>
              )}

              {/* Content */}
              <View className="p-4">{children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
}


