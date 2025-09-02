import React, { useState } from "react";
import { View, Text, PanGestureHandler, Animated } from "react-native";

export default function Slider({
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  label,
  showValue = true,
  disabled = false,
  className = "",
}) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderValue, setSliderValue] = useState(value || minimumValue);

  const handleGestureEvent = (event) => {
    if (disabled) return;

    const { translationX } = event.nativeEvent;
    const newValue = Math.max(
      minimumValue,
      Math.min(
        maximumValue,
        minimumValue +
          (translationX / sliderWidth) * (maximumValue - minimumValue)
      )
    );

    const steppedValue = Math.round(newValue / step) * step;
    setSliderValue(steppedValue);
    onValueChange && onValueChange(steppedValue);
  };

  const percentage =
    ((sliderValue - minimumValue) / (maximumValue - minimumValue)) * 100;

  return (
    <View className={`${className}`}>
      {label && (
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-gray-800 font-medium">{label}</Text>
          {showValue && <Text className="text-gray-600">{sliderValue}</Text>}
        </View>
      )}

      <View
        className="h-2 bg-gray-200 rounded-full relative"
        onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)}
      >
        <View
          className="h-2 bg-blue-600 rounded-full absolute top-0 left-0"
          style={{ width: `${percentage}%` }}
        />

        <PanGestureHandler onGestureEvent={handleGestureEvent}>
          <Animated.View
            className={`w-6 h-6 bg-blue-600 rounded-full absolute top-0 ${
              disabled ? "opacity-50" : ""
            }`}
            style={{
              left: `${percentage}%`,
              marginLeft: -12,
              marginTop: -8,
            }}
          />
        </PanGestureHandler>
      </View>
    </View>
  );
}


