import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Carousel({
  items,
  renderItem,
  showDots = true,
  showArrows = true,
  autoPlay = false,
  interval = 3000,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentIndex(pageNum);
  };

  const goToSlide = (index) => {
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    goToSlide(newIndex);
  };

  return (
    <View className={`relative ${className}`}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {items.map((item, index) => (
          <View key={index} style={{ width }}>
            {renderItem(item, index)}
          </View>
        ))}
      </ScrollView>

      {/* Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <TouchableOpacity
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full w-10 h-10 items-center justify-center"
            onPress={goToPrevious}
          >
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full w-10 h-10 items-center justify-center"
            onPress={goToNext}
          >
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>
        </>
      )}

      {/* Dots */}
      {showDots && items.length > 1 && (
        <View className="flex-row justify-center mt-4">
          {items.map((_, index) => (
            <TouchableOpacity
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onPress={() => goToSlide(index)}
            />
          ))}
        </View>
      )}
    </View>
  );
}








