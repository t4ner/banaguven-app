import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function TabBar({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}) {
  return (
    <View className={`bg-gray-100 rounded-lg p-1 ${className}`}>
      <View className="flex-row">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            className={`flex-1 py-2 rounded-md ${
              activeTab === tab.key ? "bg-white shadow-sm" : ""
            }`}
            onPress={() => onTabChange(tab.key)}
          >
            <View className="items-center">
              <Text
                className={`font-medium ${
                  activeTab === tab.key ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {tab.label}
              </Text>
              {tab.count !== undefined && tab.count > 0 && (
                <View className="bg-blue-600 rounded-full w-5 h-5 items-center justify-center mt-1">
                  <Text className="text-white text-xs font-bold">
                    {tab.count}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}








