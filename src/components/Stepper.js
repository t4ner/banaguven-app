import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Stepper({
  steps,
  currentStep,
  onStepPress,
  className = "",
}) {
  return (
    <View className={`flex-row items-center ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={step.key}>
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => onStepPress && onStepPress(step.key)}
          >
            <View
              className={`w-8 h-8 rounded-full items-center justify-center ${
                index < currentStep
                  ? "bg-blue-600"
                  : index === currentStep
                    ? "bg-blue-600"
                    : "bg-gray-300"
              }`}
            >
              {index < currentStep ? (
                <Ionicons name="checkmark" size={16} color="white" />
              ) : (
                <Text
                  className={`text-sm font-semibold ${
                    index <= currentStep ? "text-white" : "text-gray-600"
                  }`}
                >
                  {index + 1}
                </Text>
              )}
            </View>

            <Text
              className={`ml-2 text-sm font-medium ${
                index <= currentStep ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.label}
            </Text>
          </TouchableOpacity>

          {index < steps.length - 1 && (
            <View
              className={`flex-1 h-px mx-4 ${
                index < currentStep ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}








