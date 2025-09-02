import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function PhotoGrid({
  photos,
  onPhotoPress,
  columns = 3,
  className = "",
}) {
  const photoSize = (width - 48 - (columns - 1) * 12) / columns;

  return (
    <View className={`flex-row flex-wrap justify-between px-6 ${className}`}>
      {photos.map((photo, index) => (
        <TouchableOpacity
          key={photo.id}
          className="mb-3"
          style={{ width: photoSize, height: photoSize }}
          onPress={() => onPhotoPress(photo)}
        >
          <Image
            source={{ uri: photo.uri }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />

          {/* Overlay Info */}
          <View className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-lg p-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="heart" size={12} color="white" />
                <Text className="text-white text-xs ml-1">{photo.likes}</Text>
              </View>
              <Text className="text-white text-xs">{photo.uploadDate}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}


