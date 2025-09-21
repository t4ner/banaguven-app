import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Alert({
  type = "info", // info, success, warning, danger
  title,
  message,
  onClose,
  showCloseButton = true,
  className = "",
}) {
  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          container: "bg-green-50 border-green-200",
          icon: "checkmark-circle",
          iconColor: "#059669",
          titleColor: "text-green-800",
          messageColor: "text-green-700",
        };
      case "warning":
        return {
          container: "bg-yellow-50 border-yellow-200",
          icon: "warning",
          iconColor: "#D97706",
          titleColor: "text-yellow-800",
          messageColor: "text-yellow-700",
        };
      case "danger":
        return {
          container: "bg-red-50 border-red-200",
          icon: "alert-circle",
          iconColor: "#DC2626",
          titleColor: "text-red-800",
          messageColor: "text-red-700",
        };
      default:
        return {
          container: "bg-blue-50 border-blue-200",
          icon: "information-circle",
          iconColor: "#2563EB",
          titleColor: "text-blue-800",
          messageColor: "text-blue-700",
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <View className={`border rounded-lg p-4 ${styles.container} ${className}`}>
      <View className="flex-row items-start">
        <Ionicons
          name={styles.icon}
          size={20}
          color={styles.iconColor}
          style={{ marginRight: 12, marginTop: 2 }}
        />

        <View className="flex-1">
          {title && (
            <Text className={`font-semibold mb-1 ${styles.titleColor}`}>
              {title}
            </Text>
          )}
          {message && (
            <Text className={`text-sm ${styles.messageColor}`}>{message}</Text>
          )}
        </View>

        {showCloseButton && onClose && (
          <TouchableOpacity onPress={onClose} className="ml-2">
            <Ionicons name="close" size={16} color={styles.iconColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}








