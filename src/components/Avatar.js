import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Avatar({
  source,
  name,
  size = "medium", // small, medium, large, xlarge
  showOnlineStatus = false,
  isOnline = false,
  showStarredBadge = false,
  isStarred = false,
  onPress,
  className = "",
}) {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "w-8 h-8";
      case "medium":
        return "w-12 h-12";
      case "large":
        return "w-16 h-16";
      case "xlarge":
        return "w-24 h-24";
      default:
        return "w-12 h-12";
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "medium":
        return "text-lg";
      case "large":
        return "text-xl";
      case "xlarge":
        return "text-3xl";
      default:
        return "text-lg";
    }
  };

  const getOnlineStatusSize = () => {
    switch (size) {
      case "small":
        return "w-2 h-2";
      case "medium":
        return "w-3 h-3";
      case "large":
        return "w-4 h-4";
      case "xlarge":
        return "w-5 h-5";
      default:
        return "w-3 h-3";
    }
  };

  const getStarredBadgeSize = () => {
    switch (size) {
      case "small":
        return "w-4 h-4";
      case "medium":
        return "w-5 h-5";
      case "large":
        return "w-6 h-6";
      case "xlarge":
        return "w-8 h-8";
      default:
        return "w-5 h-5";
    }
  };

  const AvatarComponent = onPress ? TouchableOpacity : View;

  return (
    <AvatarComponent className={`relative ${className}`} onPress={onPress}>
      {source ? (
        <Image
          source={{ uri: source }}
          className={`${getSizeStyles()} rounded-full`}
        />
      ) : (
        <View
          className={`${getSizeStyles()} bg-blue-100 rounded-full items-center justify-center`}
        >
          <Text className={`text-blue-600 font-semibold ${getTextSize()}`}>
            {name?.charAt(0) || "U"}
          </Text>
        </View>
      )}

      {/* Online Status */}
      {showOnlineStatus && (
        <View
          className={`absolute bottom-0 right-0 ${getOnlineStatusSize()} rounded-full border-2 border-white ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      )}

      {/* Starred Badge */}
      {showStarredBadge && isStarred && (
        <View
          className={`absolute -top-1 -right-1 bg-yellow-500 rounded-full ${getStarredBadgeSize()} items-center justify-center`}
        >
          <Text className="text-white text-xs">⭐</Text>
        </View>
      )}
    </AvatarComponent>
  );
}


