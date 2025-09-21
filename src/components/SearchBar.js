import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Ara...",
  onClear,
  showClearButton = true,
  className = "",
}) {
  return (
    <View
      className={`flex-row items-center bg-gray-100 rounded-lg px-4 py-3 ${className}`}
    >
      <Ionicons name="search" size={20} color="#6B7280" />

      <TextInput
        className="flex-1 ml-3 text-gray-800"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9CA3AF"
      />

      {showClearButton && value && onClear && (
        <TouchableOpacity onPress={onClear} className="ml-2">
          <Ionicons name="close-circle" size={20} color="#6B7280" />
        </TouchableOpacity>
      )}
    </View>
  );
}








