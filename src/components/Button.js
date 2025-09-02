import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

export default function Button({
  title,
  onPress,
  variant = "primary", // primary, secondary, danger, success
  size = "medium", // small, medium, large
  disabled = false,
  loading = false,
  icon,
  className = "",
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600";
      case "secondary":
        return "bg-gray-600";
      case "danger":
        return "bg-red-600";
      case "success":
        return "bg-green-600";
      default:
        return "bg-blue-600";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "px-3 py-2";
      case "medium":
        return "px-4 py-3";
      case "large":
        return "px-6 py-4";
      default:
        return "px-4 py-3";
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "medium":
        return "text-base";
      case "large":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  return (
    <TouchableOpacity
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        rounded-lg
        items-center
        justify-center
        flex-row
        ${disabled || loading ? "opacity-50" : ""}
        ${className}
      `}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={`text-white font-semibold ${getTextSize()}`}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}


