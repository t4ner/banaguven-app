import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MessagesScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const conversations = [
    {
      id: "1",
      user: {
        id: "1",
        name: "Ahmet Yılmaz",
        username: "ahmetyilmaz",
        profilePhoto: null,
        isOnline: true,
        isStarred: true,
      },
      lastMessage: {
        text: "Merhaba! Nasılsın?",
        timestamp: "14:30",
        isRead: false,
        senderId: "1",
      },
      unreadCount: 2,
    },
    {
      id: "2",
      user: {
        id: "2",
        name: "Ayşe Demir",
        username: "aysedemir",
        profilePhoto: null,
        isOnline: false,
        isStarred: false,
      },
      lastMessage: {
        text: "Teşekkürler, görüşürüz!",
        timestamp: "12:15",
        isRead: true,
        senderId: "2",
      },
      unreadCount: 0,
    },
    {
      id: "3",
      user: {
        id: "3",
        name: "Mehmet Kaya",
        username: "mehmetkaya",
        profilePhoto: null,
        isOnline: true,
        isStarred: true,
      },
      lastMessage: {
        text: "Evet, kesinlikle katılıyorum",
        timestamp: "10:45",
        isRead: true,
        senderId: "3",
      },
      unreadCount: 0,
    },
    {
      id: "4",
      user: {
        id: "4",
        name: "Fatma Özkan",
        username: "fatmaozkan",
        profilePhoto: null,
        isOnline: false,
        isStarred: false,
      },
      lastMessage: {
        text: "Fotoğraflar çok güzel olmuş",
        timestamp: "Dün",
        isRead: false,
        senderId: "4",
      },
      unreadCount: 1,
    },
  ];

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.user.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      conversation.user.username
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const renderConversationCard = (conversation) => (
    <TouchableOpacity
      key={conversation.id}
      className="bg-white rounded-lg p-4 mb-3 shadow-sm"
      onPress={() =>
        navigation.navigate("Chat", {
          userId: conversation.user.id,
          userName: conversation.user.name,
          userProfile: conversation.user,
        })
      }
    >
      <View className="flex-row items-center">
        {/* Profile Photo */}
        <View className="relative">
          {conversation.user.profilePhoto ? (
            <Image
              source={{ uri: conversation.user.profilePhoto }}
              className="w-14 h-14 rounded-full"
            />
          ) : (
            <View className="w-14 h-14 bg-blue-100 rounded-full items-center justify-center">
              <Text className="text-blue-600 text-lg font-semibold">
                {conversation.user.name.charAt(0)}
              </Text>
            </View>
          )}

          {/* Online Status */}
          <View
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
              conversation.user.isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          />

          {/* Starred Badge */}
          {conversation.user.isStarred && (
            <View className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-5 h-5 items-center justify-center">
              <Text className="text-white text-xs">⭐</Text>
            </View>
          )}
        </View>

        {/* Conversation Info */}
        <View className="flex-1 ml-3">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="font-semibold text-gray-800">
              {conversation.user.name}
            </Text>
            <Text className="text-gray-500 text-sm">
              {conversation.lastMessage.timestamp}
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Text
              className={`flex-1 text-sm ${
                conversation.lastMessage.isRead
                  ? "text-gray-600"
                  : "text-gray-800 font-medium"
              }`}
              numberOfLines={1}
            >
              {conversation.lastMessage.senderId === conversation.user.id
                ? ""
                : "Sen: "}
              {conversation.lastMessage.text}
            </Text>

            {conversation.unreadCount > 0 && (
              <View className="bg-blue-600 rounded-full w-5 h-5 items-center justify-center ml-2">
                <Text className="text-white text-xs font-bold">
                  {conversation.unreadCount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4 shadow-sm">
        <Text className="text-2xl font-bold text-gray-800 mb-4">Mesajlar</Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-3 text-gray-800"
            placeholder="Mesajlarda ara..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Quick Actions */}
      <View className="bg-white px-6 py-3 shadow-sm">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-3">
            <TouchableOpacity className="bg-blue-100 rounded-full px-4 py-2">
              <Text className="text-blue-700 font-medium">Tümü</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2">
              <Text className="text-gray-700">Okunmamış</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2">
              <Text className="text-gray-700">Yıldızlı</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2">
              <Text className="text-gray-700">Gruplar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Conversations List */}
      <ScrollView className="flex-1 px-6 py-4">
        {filteredConversations.length > 0 ? (
          filteredConversations.map(renderConversationCard)
        ) : (
          <View className="items-center py-12">
            <Ionicons name="chatbubbles-outline" size={64} color="#D1D5DB" />
            <Text className="text-gray-500 text-center mt-4">
              {searchQuery
                ? "Arama kriterlerinize uygun mesaj bulunamadı"
                : "Henüz mesajınız yok"}
            </Text>
            <Text className="text-gray-400 text-center text-sm mt-2">
              {searchQuery
                ? "Farklı anahtar kelimeler deneyin"
                : "Arkadaşlarınızla sohbet etmeye başlayın"}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* New Message Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-blue-600 rounded-full w-14 h-14 items-center justify-center shadow-lg"
        onPress={() => {
          /* Navigate to new message screen */
        }}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}








