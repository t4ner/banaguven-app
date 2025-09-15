import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

export default function Skeleton({
  width = "100%",
  height = 20,
  borderRadius = 4,
  className = "",
}) {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shimmer = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    shimmer.start();

    return () => shimmer.stop();
  }, []);

  return (
    <View
      className={`bg-gray-200 ${className}`}
      style={{
        width,
        height,
        borderRadius,
        overflow: "hidden",
      }}
    >
      <Animated.View
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        style={{
          opacity: shimmerAnim,
          transform: [
            {
              translateX: shimmerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 100],
              }),
            },
          ],
        }}
      />
    </View>
  );
}






