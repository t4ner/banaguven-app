import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";

export default function UserCard({
  user,
  onPress,
  onAction,
  actionTitle,
  showOnlineStatus = false,
  showStarredBadge = false,
  className = "",
}) {
  return (
    <TouchableOpacity
      className={`bg-white rounded-lg p-4 mb-3 shadow-sm ${className}`}
      onPress={onPress}
    >
      <View className="flex-row items-center">
        {/* Avatar */}
        <Avatar
          source={user.profilePhoto}
          name={user.name}
          size="large"
          showOnlineStatus={showOnlineStatus}
          isOnline={user.isOnline}
          showStarredBadge={showStarredBadge}
          isStarred={user.isStarred}
        />

        {/* User Info */}
        <View className="flex-1 ml-4">
          <View className="flex-row items-center mb-1">
            <Text className="text-lg font-semibold text-gray-800">
              {user.name}
            </Text>
            {user.age && (
              <Text className="text-gray-500 ml-2">({user.age})</Text>
            )}
          </View>

          <Text className="text-gray-600 text-sm mb-1">@{user.username}</Text>

          {user.location && (
            <View className="flex-row items-center mb-2">
              <Ionicons name="location-outline" size={14} color="#6B7280" />
              <Text className="text-gray-600 text-sm ml-1">
                {user.location}
              </Text>
            </View>
          )}

          {user.lastSeen && (
            <Text
              className={`text-sm ${user.isOnline ? "text-green-600" : "text-gray-500"}`}
            >
              {user.lastSeen}
            </Text>
          )}
        </View>

        {/* Action Button */}
        {actionTitle && onAction && (
          <TouchableOpacity
            className="bg-blue-600 rounded-lg px-4 py-2"
            onPress={onAction}
          >
            <Text className="text-white font-medium text-sm">
              {actionTitle}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}






