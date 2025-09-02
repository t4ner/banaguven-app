import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";

export default function MessageCard({ conversation, onPress, className = "" }) {
  const { user, lastMessage, unreadCount } = conversation;

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
          size="medium"
          showOnlineStatus={true}
          isOnline={user.isOnline}
          showStarredBadge={true}
          isStarred={user.isStarred}
        />

        {/* Message Info */}
        <View className="flex-1 ml-3">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="font-semibold text-gray-800">{user.name}</Text>
            <Text className="text-gray-500 text-sm">
              {lastMessage.timestamp}
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Text
              className={`flex-1 text-sm ${
                lastMessage.isRead
                  ? "text-gray-600"
                  : "text-gray-800 font-medium"
              }`}
              numberOfLines={1}
            >
              {lastMessage.senderId === user.id ? "" : "Sen: "}
              {lastMessage.text}
            </Text>

            {unreadCount > 0 && (
              <View className="bg-blue-600 rounded-full w-5 h-5 items-center justify-center ml-2">
                <Text className="text-white text-xs font-bold">
                  {unreadCount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}


