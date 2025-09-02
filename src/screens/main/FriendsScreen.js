import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FriendsScreen() {
  const [activeTab, setActiveTab] = useState("friends"); // friends, requests, sent

  // Mock data
  const friends = [
    {
      id: "1",
      name: "Ahmet Yılmaz",
      username: "ahmetyilmaz",
      profilePhoto: null,
      isOnline: true,
      lastSeen: "Şimdi",
      isStarred: true,
    },
    {
      id: "2",
      name: "Ayşe Demir",
      username: "aysedemir",
      profilePhoto: null,
      isOnline: false,
      lastSeen: "2 saat önce",
      isStarred: false,
    },
    {
      id: "3",
      name: "Mehmet Kaya",
      username: "mehmetkaya",
      profilePhoto: null,
      isOnline: true,
      lastSeen: "Şimdi",
      isStarred: true,
    },
  ];

  const friendRequests = [
    {
      id: "4",
      name: "Fatma Özkan",
      username: "fatmaozkan",
      profilePhoto: null,
      isStarred: false,
      requestDate: "2 saat önce",
    },
    {
      id: "5",
      name: "Ali Veli",
      username: "aliveli",
      profilePhoto: null,
      isStarred: true,
      requestDate: "1 gün önce",
    },
  ];

  const sentRequests = [
    {
      id: "6",
      name: "Zeynep Ak",
      username: "zeynepak",
      profilePhoto: null,
      isStarred: false,
      requestDate: "3 saat önce",
      status: "pending",
    },
  ];

  const handleAcceptRequest = (userId) => {
    Alert.alert(
      "Arkadaşlık İsteği",
      "Arkadaşlık isteğini kabul etmek istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Kabul Et",
          onPress: () => {
            Alert.alert("Başarılı", "Arkadaşlık isteği kabul edildi!");
          },
        },
      ]
    );
  };

  const handleRejectRequest = (userId) => {
    Alert.alert(
      "Arkadaşlık İsteği",
      "Arkadaşlık isteğini reddetmek istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Reddet",
          style: "destructive",
          onPress: () => {
            Alert.alert("Bilgi", "Arkadaşlık isteği reddedildi");
          },
        },
      ]
    );
  };

  const handleRemoveFriend = (userId) => {
    Alert.alert(
      "Arkadaşı Kaldır",
      "Bu kişiyi arkadaş listesinden kaldırmak istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Kaldır",
          style: "destructive",
          onPress: () => {
            Alert.alert("Bilgi", "Arkadaş listesinden kaldırıldı");
          },
        },
      ]
    );
  };

  const renderFriendCard = (friend) => (
    <View
      key={friend.id}
      className="bg-white rounded-2xl p-5 mb-4 shadow-lg border border-gray-100"
    >
      <View className="flex-row items-center">
        {/* Profile Photo */}
        <View className="relative">
          {friend.profilePhoto ? (
            <Image
              source={{ uri: friend.profilePhoto }}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <View className="w-16 h-16 bg-blue-600 rounded-full items-center justify-center">
              <Text className="text-white font-bold text-lg">
                {friend.name.charAt(0)}
              </Text>
            </View>
          )}

          {/* Online Status */}
          <View
            className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-3 border-white ${
              friend.isOnline ? "bg-emerald-500" : "bg-gray-400"
            }`}
          />

          {/* Starred Badge */}
          {friend.isStarred && (
            <View className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 items-center justify-center shadow-md">
              <Ionicons name="star" size={12} color="white" />
            </View>
          )}
        </View>

        {/* Friend Info */}
        <View className="flex-1 ml-4">
          <View className="flex-row items-center">
            <Text className="font-bold text-gray-900 text-lg">
              {friend.name}
            </Text>
            {friend.isStarred && (
              <Ionicons
                name="star"
                size={14}
                color="#F59E0B"
                className="ml-1"
              />
            )}
          </View>
          <Text className="text-gray-500 text-sm font-medium">
            @{friend.username}
          </Text>
          {friend.lastSeen && (
            <View className="flex-row items-center mt-1">
              <View
                className={`w-2 h-2 rounded-full mr-2 ${
                  friend.isOnline ? "bg-emerald-500" : "bg-gray-400"
                }`}
              />
              <Text
                className={`text-xs font-medium ${
                  friend.isOnline ? "text-emerald-600" : "text-gray-500"
                }`}
              >
                {friend.lastSeen}
              </Text>
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View className="flex-row space-x-3">
          <TouchableOpacity
            className="bg-blue-600 rounded-xl px-4 py-3 shadow-md"
            onPress={() => {
              /* Navigate to chat */
            }}
          >
            <Ionicons name="chatbubble" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-gray-100 rounded-xl px-4 py-3"
            onPress={() => handleRemoveFriend(friend.id)}
          >
            <Ionicons name="person-remove" size={18} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderRequestCard = (request) => (
    <View
      key={request.id}
      className="bg-white rounded-2xl p-5 mb-4 shadow-lg border border-gray-100"
    >
      <View className="flex-row items-center">
        {/* Profile Photo */}
        <View className="relative">
          {request.profilePhoto ? (
            <Image
              source={{ uri: request.profilePhoto }}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <View className="w-16 h-16 bg-blue-600 rounded-full items-center justify-center">
              <Text className="text-white font-bold text-lg">
                {request.name.charAt(0)}
              </Text>
            </View>
          )}

          {/* Starred Badge */}
          {request.isStarred && (
            <View className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 items-center justify-center shadow-md">
              <Ionicons name="star" size={12} color="white" />
            </View>
          )}
        </View>

        {/* Request Info */}
        <View className="flex-1 ml-4">
          <View className="flex-row items-center">
            <Text className="font-bold text-gray-900 text-lg">
              {request.name}
            </Text>
            {request.isStarred && (
              <Ionicons
                name="star"
                size={14}
                color="#F59E0B"
                className="ml-1"
              />
            )}
          </View>
          <Text className="text-gray-500 text-sm font-medium">
            @{request.username}
          </Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="time-outline" size={12} color="#9CA3AF" />
            <Text className="text-gray-500 text-xs font-medium ml-1">
              {request.requestDate}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row space-x-3">
          <TouchableOpacity
            className="bg-green-600 rounded-xl px-4 py-3 shadow-md"
            onPress={() => handleAcceptRequest(request.id)}
          >
            <Ionicons name="checkmark" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-red-600 rounded-xl px-4 py-3 shadow-md"
            onPress={() => handleRejectRequest(request.id)}
          >
            <Ionicons name="close" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderSentRequestCard = (request) => (
    <View
      key={request.id}
      className="bg-white rounded-2xl p-5 mb-4 shadow-lg border border-gray-100"
    >
      <View className="flex-row items-center">
        {/* Profile Photo */}
        <View className="relative">
          {request.profilePhoto ? (
            <Image
              source={{ uri: request.profilePhoto }}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <View className="w-16 h-16 bg-blue-600 rounded-full items-center justify-center">
              <Text className="text-white font-bold text-lg">
                {request.name.charAt(0)}
              </Text>
            </View>
          )}

          {/* Starred Badge */}
          {request.isStarred && (
            <View className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 items-center justify-center shadow-md">
              <Ionicons name="star" size={12} color="white" />
            </View>
          )}
        </View>

        {/* Request Info */}
        <View className="flex-1 ml-4">
          <View className="flex-row items-center">
            <Text className="font-bold text-gray-900 text-lg">
              {request.name}
            </Text>
            {request.isStarred && (
              <Ionicons
                name="star"
                size={14}
                color="#F59E0B"
                className="ml-1"
              />
            )}
          </View>
          <Text className="text-gray-500 text-sm font-medium">
            @{request.username}
          </Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="time-outline" size={12} color="#9CA3AF" />
            <Text className="text-gray-500 text-xs font-medium ml-1">
              {request.requestDate}
            </Text>
          </View>
        </View>

        {/* Status */}
        <View className="bg-yellow-100 rounded-xl px-4 py-3 border border-yellow-200">
          <View className="flex-row items-center">
            <Ionicons name="hourglass-outline" size={14} color="#D97706" />
            <Text className="text-amber-800 text-sm font-semibold ml-1">
              Beklemede
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  const getCurrentData = () => {
    switch (activeTab) {
      case "friends":
        return friends;
      case "requests":
        return friendRequests;
      case "sent":
        return sentRequests;
      default:
        return [];
    }
  };

  const getCurrentCount = () => {
    switch (activeTab) {
      case "friends":
        return friends.length;
      case "requests":
        return friendRequests.length;
      case "sent":
        return sentRequests.length;
      default:
        return 0;
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      {/* Header */}
      <View className="bg-blue-600 px-6 pt-12 pb-6">
        <Text className="text-3xl font-bold text-white mb-6">Arkadaşlar</Text>

        {/* Tabs */}
        <View className="flex-row bg-white/20 backdrop-blur-sm rounded-2xl p-1">
          {[
            {
              key: "friends",
              label: "Arkadaşlar",
              count: friends.length,
              icon: "people",
            },
            {
              key: "requests",
              label: "İstekler",
              count: friendRequests.length,
              icon: "person-add",
            },
            {
              key: "sent",
              label: "Gönderilen",
              count: sentRequests.length,
              icon: "send",
            },
          ].map((tab) => (
            <TouchableOpacity
              key={tab.key}
              className={`flex-1 py-3 rounded-xl ${
                activeTab === tab.key ? "bg-white shadow-lg" : ""
              }`}
              onPress={() => setActiveTab(tab.key)}
            >
              <View className="items-center">
                <View className="flex-row items-center">
                  <Ionicons
                    name={
                      activeTab === tab.key ? tab.icon : `${tab.icon}-outline`
                    }
                    size={16}
                    color={
                      activeTab === tab.key
                        ? "#667eea"
                        : "rgba(255,255,255,0.8)"
                    }
                  />
                  <Text
                    className={`font-semibold ml-1 ${
                      activeTab === tab.key ? "text-blue-600" : "text-white"
                    }`}
                  >
                    {tab.label}
                  </Text>
                </View>
                {tab.count > 0 && (
                  <View
                    className={`rounded-full w-5 h-5 items-center justify-center mt-1 ${
                      activeTab === tab.key ? "bg-blue-600" : "bg-white/30"
                    }`}
                  >
                    <Text
                      className={`text-xs font-bold ${
                        activeTab === tab.key ? "text-white" : "text-white"
                      }`}
                    >
                      {tab.count}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-6 py-4">
        {getCurrentCount() > 0 ? (
          getCurrentData().map((item) => {
            switch (activeTab) {
              case "friends":
                return renderFriendCard(item);
              case "requests":
                return renderRequestCard(item);
              case "sent":
                return renderSentRequestCard(item);
              default:
                return null;
            }
          })
        ) : (
          <View className="items-center py-16">
            <View className="bg-blue-100 rounded-full p-8 mb-6">
              <Ionicons
                name={
                  activeTab === "friends"
                    ? "people-outline"
                    : activeTab === "requests"
                      ? "person-add-outline"
                      : "send-outline"
                }
                size={48}
                color="#667eea"
              />
            </View>
            <Text className="text-gray-700 text-center text-lg font-semibold mb-2">
              {activeTab === "friends" && "Henüz arkadaşınız yok"}
              {activeTab === "requests" && "Bekleyen arkadaşlık isteği yok"}
              {activeTab === "sent" && "Gönderilen istek yok"}
            </Text>
            <Text className="text-gray-500 text-center text-sm leading-5 px-8">
              {activeTab === "friends" &&
                "Keşfet sayfasından yeni arkadaşlar bulabilir ve onlarla bağlantı kurabilirsiniz"}
              {activeTab === "requests" &&
                "Size gelen arkadaşlık istekleri burada görünecek"}
              {activeTab === "sent" &&
                "Gönderdiğiniz arkadaşlık istekleri burada görünecek"}
            </Text>
            {activeTab === "friends" && (
              <TouchableOpacity className="bg-blue-600 rounded-xl px-6 py-3 mt-6 shadow-lg">
                <Text className="text-white font-semibold">Arkadaş Bul</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
