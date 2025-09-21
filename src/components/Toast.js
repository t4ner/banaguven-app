import React, { useEffect } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Toast({
  visible,
  message,
  type = "info", // info, success, warning, danger
  duration = 3000,
  onClose,
  position = "top", // top, bottom
}) {
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(position === "top" ? -100 : 100);

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      if (duration > 0) {
        const timer = setTimeout(() => {
          hideToast();
        }, duration);

        return () => clearTimeout(timer);
      }
    }
  }, [visible]);

  const hideToast = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: position === "top" ? -100 : 100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose && onClose();
    });
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-500",
          icon: "checkmark-circle",
        };
      case "warning":
        return {
          bg: "bg-yellow-500",
          icon: "warning",
        };
      case "danger":
        return {
          bg: "bg-red-500",
          icon: "alert-circle",
        };
      default:
        return {
          bg: "bg-blue-500",
          icon: "information-circle",
        };
    }
  };

  const styles = getTypeStyles();

  if (!visible) return null;

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: 20,
        right: 20,
        [position]: 50,
        zIndex: 1000,
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
    >
      <View className={`${styles.bg} rounded-lg p-4 flex-row items-center`}>
        <Ionicons name={styles.icon} size={20} color="white" />
        <Text className="text-white flex-1 ml-3">{message}</Text>
        <TouchableOpacity onPress={hideToast}>
          <Ionicons name="close" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}








