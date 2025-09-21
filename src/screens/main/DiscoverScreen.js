import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DiscoverScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all"); // all, male, female
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const mockUsers = [
    {
      id: "1",
      name: "Ahmet Yılmaz",
      age: 28,
      gender: "Erkek",
      username: "ahmetyilmaz",
      profilePhoto: null,
      isStarred: true,
      isOnline: true,
      lastSeen: "Şimdi",
      location: "İstanbul",
      interests: ["Spor", "Müzik", "Seyahat"],
    },
    {
      id: "2",
      name: "Ayşe Demir",
      age: 25,
      gender: "Kadın",
      username: "aysedemir",
      profilePhoto: null,
      isStarred: false,
      isOnline: false,
      lastSeen: "2 saat önce",
      location: "Ankara",
      interests: ["Kitap", "Sanat", "Doğa"],
    },
    {
      id: "3",
      name: "Mehmet Kaya",
      age: 30,
      gender: "Erkek",
      username: "mehmetkaya",
      profilePhoto: null,
      isStarred: true,
      isOnline: true,
      lastSeen: "Şimdi",
      location: "İzmir",
      interests: ["Teknoloji", "Oyun", "Film"],
    },
    {
      id: "4",
      name: "Fatma Özkan",
      age: 27,
      gender: "Kadın",
      username: "fatmaozkan",
      profilePhoto: null,
      isStarred: false,
      isOnline: false,
      lastSeen: "1 gün önce",
      location: "Bursa",
      interests: ["Yemek", "Seyahat", "Fotoğraf"],
    },
  ];

  useEffect(() => {
    loadUsers();
  }, [selectedFilter, searchQuery]);

  const loadUsers = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      let filteredUsers = mockUsers;

      // Filter by gender
      if (selectedFilter !== "all") {
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.gender === (selectedFilter === "male" ? "Erkek" : "Kadın")
        );
      }

      // Filter by search query
      if (searchQuery.trim()) {
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.interests.some((interest) =>
              interest.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
      }

      // Sort by starred status and online status
      filteredUsers.sort((a, b) => {
        if (a.isStarred !== b.isStarred) return b.isStarred - a.isStarred;
        if (a.isOnline !== b.isOnline) return b.isOnline - a.isOnline;
        return 0;
      });

      setUsers(filteredUsers);
      setIsLoading(false);
    }, 500);
  };

  const handleSendFriendRequest = (userId) => {
    Alert.alert("Arkadaşlık İsteği", "Arkadaşlık isteği gönderilsin mi?", [
      { text: "İptal", style: "cancel" },
      {
        text: "Gönder",
        onPress: () => {
          Alert.alert("Başarılı", "Arkadaşlık isteği gönderildi!");
        },
      },
    ]);
  };

  const renderUserCard = (user) => (
    <View key={user.id} className="bg-white rounded-lg p-4 mb-3 shadow-sm">
      <View className="flex-row items-start">
        {/* Profile Photo */}
        <View className="relative">
          {user.profilePhoto ? (
            <Image
              source={{ uri: user.profilePhoto }}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center">
              <Text className="text-blue-600 text-xl font-semibold">
                {user.name.charAt(0)}
              </Text>
            </View>
          )}

          {/* Online Status */}
          <View
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
              user.isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          />

          {/* Starred Badge */}
          {user.isStarred && (
            <View className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 items-center justify-center">
              <Text className="text-white text-xs">⭐</Text>
            </View>
          )}
        </View>

        {/* User Info */}
        <View className="flex-1 ml-4">
          <View className="flex-row items-center mb-1">
            <Text className="text-lg font-semibold text-gray-800">
              {user.name}
            </Text>
            <Text className="text-gray-500 ml-2">({user.age})</Text>
          </View>

          <Text className="text-gray-600 text-sm mb-1">@{user.username}</Text>

          <View className="flex-row items-center mb-2">
            <Ionicons name="location-outline" size={14} color="#6B7280" />
            <Text className="text-gray-600 text-sm ml-1">{user.location}</Text>
            <Text className="text-gray-400 mx-2">•</Text>
            <Text
              className={`text-sm ${user.isOnline ? "text-green-600" : "text-gray-500"}`}
            >
              {user.lastSeen}
            </Text>
          </View>

          {/* Interests */}
          <View className="flex-row flex-wrap mb-3">
            {user.interests.slice(0, 3).map((interest, index) => (
              <View
                key={index}
                className="bg-blue-100 rounded-full px-2 py-1 mr-2 mb-1"
              >
                <Text className="text-blue-700 text-xs">{interest}</Text>
              </View>
            ))}
          </View>

          {/* Action Button */}
          <TouchableOpacity
            className="bg-blue-600 rounded-lg py-2"
            onPress={() => handleSendFriendRequest(user.id)}
          >
            <Text className="text-white text-center font-medium">
              Arkadaşlık İsteği Gönder
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4 shadow-sm">
        <Text className="text-2xl font-bold text-gray-800 mb-4">Keşfet</Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-3 text-gray-800"
            placeholder="İsim, kullanıcı adı veya ilgi alanı ara..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filters */}
      <View className="bg-white px-6 py-3 shadow-sm">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-3">
            {[
              { key: "all", label: "Tümü" },
              { key: "male", label: "Erkek" },
              { key: "female", label: "Kadın" },
            ].map((filter) => (
              <TouchableOpacity
                key={filter.key}
                className={`px-4 py-2 rounded-full ${
                  selectedFilter === filter.key ? "bg-blue-600" : "bg-gray-200"
                }`}
                onPress={() => setSelectedFilter(filter.key)}
              >
                <Text
                  className={`font-medium ${
                    selectedFilter === filter.key
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {filter.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Users List */}
      <ScrollView className="flex-1 px-6 py-4">
        {isLoading ? (
          <View className="items-center py-8">
            <Text className="text-gray-500">Yükleniyor...</Text>
          </View>
        ) : users.length > 0 ? (
          users.map(renderUserCard)
        ) : (
          <View className="items-center py-8">
            <Text className="text-gray-500 text-center">
              Arama kriterlerinize uygun kullanıcı bulunamadı
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Premium Notice */}
      <View className="bg-gradient-to-r from-yellow-400 to-orange-500 mx-6 mb-4 rounded-lg p-4">
        <View className="flex-row items-center">
          <Text className="text-white text-2xl mr-3">👑</Text>
          <View className="flex-1">
            <Text className="text-white font-semibold">Premium Üyelik</Text>
            <Text className="text-white text-sm">
              Keşfet listesinde üst sırada görünün
            </Text>
          </View>
          <TouchableOpacity className="bg-white rounded-lg px-4 py-2">
            <Text className="text-orange-500 font-medium">Yükselt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}








