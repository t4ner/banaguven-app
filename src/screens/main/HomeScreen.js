import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function HomeScreen({ navigation }) {
  const { user } = useAuth();

  // Mock data for discover people - 6-10 boxes with Unsplash images
  const discoverPeople = [
    {
      id: 1,
      name: "TANER",
      age: 25,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
    {
      id: 2,
      name: "EMRE",
      age: 25,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      isHighlighted: true,
    },
    {
      id: 3,
      name: "AYŞE",
      age: 23,
      image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
    {
      id: 4,
      name: "MEHMET",
      age: 28,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
    {
      id: 5,
      name: "FATMA",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
    {
      id: 6,
      name: "ALİ",
      age: 24,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
    {
      id: 7,
      name: "ZEYNEP",
      age: 22,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
    {
      id: 8,
      name: "CAN",
      age: 27,
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
    {
      id: 9,
      name: "ELİF",
      age: 25,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
      isHighlighted: false,
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Turquoise Header */}
      <View className="bg-cyan-500 px-4 py-4 flex-row items-center justify-between mt-[70px]">
        <Text className="text-black text-xl font-bold uppercase tracking-wider">
          LOGO
        </Text>
        <TouchableOpacity
          className="bg-black w-10 h-10 rounded-full items-center justify-center"
          onPress={() => navigation.navigate("Profile")}
        >
          <Text className="text-white text-xs">👤</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content - Clean Grid Layout */}
      <ScrollView className="flex-1 bg-white">
        <View className="p-4">
          {/* Grid Container */}
          <View className="flex-row flex-wrap justify-between">
            {discoverPeople.map((person, index) => (
              <TouchableOpacity
                key={person.id}
                className={`rounded-xl overflow-hidden mb-4 ${
                  person.isHighlighted ? "border-2 border-purple-500" : ""
                }`}
                style={{
                  width: "48%",
                  aspectRatio: 1,
                }}
              >
                <Image
                  source={{ uri: person.image }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 left-0 right-0 bg-black/30 bg-opacity-70 p-3 flex flex-row justify-between">
                  <Text className="text-white text-base font-bold uppercase tracking-wider text-center">
                    {person.name}
                  </Text>
                  <Text className="text-white text-sm font-medium text-center">
                    {person.age} 
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
