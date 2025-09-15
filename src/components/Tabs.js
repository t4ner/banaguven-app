import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Tabs({
  tabs,
  activeTab,
  onTabChange,
  scrollable = false,
  className = "",
}) {
  const TabContainer = scrollable ? ScrollView : View;
  const tabContainerProps = scrollable
    ? {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        contentContainerStyle: { paddingHorizontal: 16 },
      }
    : {};

  return (
    <View className={`bg-white shadow-sm ${className}`}>
      <TabContainer className="flex-row" {...tabContainerProps}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            className={`flex-1 py-3 px-4 ${
              activeTab === tab.key ? "border-b-2 border-blue-600" : ""
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
      </TabContainer>
    </View>
  );
}






