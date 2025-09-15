import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  className = "",
}) {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <View className={`flex-row items-center justify-center ${className}`}>
      {showFirstLast && currentPage > 1 && (
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-lg mr-2"
          onPress={() => onPageChange(1)}
        >
          <Ionicons name="chevron-back" size={20} color="#6B7280" />
        </TouchableOpacity>
      )}

      {showPrevNext && currentPage > 1 && (
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-lg mr-2"
          onPress={() => onPageChange(currentPage - 1)}
        >
          <Ionicons name="chevron-back" size={20} color="#6B7280" />
        </TouchableOpacity>
      )}

      {getVisiblePages().map((page, index) => (
        <TouchableOpacity
          key={index}
          className={`w-10 h-10 items-center justify-center rounded-lg mx-1 ${
            page === currentPage ? "bg-blue-600" : "bg-gray-200"
          }`}
          onPress={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
        >
          <Text
            className={`text-sm font-medium ${
              page === currentPage ? "text-white" : "text-gray-700"
            }`}
          >
            {page}
          </Text>
        </TouchableOpacity>
      ))}

      {showPrevNext && currentPage < totalPages && (
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-lg ml-2"
          onPress={() => onPageChange(currentPage + 1)}
        >
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>
      )}

      {showFirstLast && currentPage < totalPages && (
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-lg ml-2"
          onPress={() => onPageChange(totalPages)}
        >
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>
      )}
    </View>
  );
}






