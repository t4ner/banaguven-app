import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen({ navigation, route }) {
  const { userId, userName, userProfile } = route.params;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef(null);

  // Mock messages
  const mockMessages = [
    {
      id: "1",
      text: "Merhaba! Nasılsın?",
      senderId: userId,
      timestamp: "14:30",
      isRead: true,
    },
    {
      id: "2",
      text: "Merhaba! İyiyim, teşekkürler. Sen nasılsın?",
      senderId: "current_user",
      timestamp: "14:32",
      isRead: true,
    },
    {
      id: "3",
      text: "Ben de iyiyim. Bu uygulama gerçekten güzel olmuş.",
      senderId: userId,
      timestamp: "14:35",
      isRead: true,
    },
    {
      id: "4",
      text: "Evet, güvenli bir ortam sağlıyor. TC kimlik doğrulaması çok mantıklı.",
      senderId: "current_user",
      timestamp: "14:37",
      isRead: true,
    },
    {
      id: "5",
      text: "Kesinlikle! Sahte hesaplar olmadan çok daha güvenli.",
      senderId: userId,
      timestamp: "14:40",
      isRead: false,
    },
  ];

  useEffect(() => {
    setMessages(mockMessages);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: message.trim(),
        senderId: "current_user",
        timestamp: new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isRead: false,
      };

      setMessages((prev) => [...prev, newMessage]);
      setMessage("");

      // Scroll to bottom
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  const handleVoiceMessage = () => {
    Alert.alert("Ses Mesajı", "Ses mesajı özelliği yakında eklenecek");
  };

  const handleImagePicker = () => {
    Alert.alert("Fotoğraf", "Fotoğraf gönderme özelliği yakında eklenecek");
  };

  const renderMessage = (msg) => {
    const isCurrentUser = msg.senderId === "current_user";

    return (
      <View
        key={msg.id}
        className={`flex-row mb-3 ${isCurrentUser ? "justify-end" : "justify-start"}`}
      >
        <View
          className={`max-w-[80%] rounded-lg px-4 py-3 ${
            isCurrentUser
              ? "bg-blue-600 rounded-br-sm"
              : "bg-white border border-gray-200 rounded-bl-sm"
          }`}
        >
          <Text
            className={`text-base ${
              isCurrentUser ? "text-white" : "text-gray-800"
            }`}
          >
            {msg.text}
          </Text>
          <View className="flex-row items-center mt-1">
            <Text
              className={`text-xs ${
                isCurrentUser ? "text-blue-100" : "text-gray-500"
              }`}
            >
              {msg.timestamp}
            </Text>
            {isCurrentUser && (
              <Ionicons
                name={msg.isRead ? "checkmark-done" : "checkmark"}
                size={12}
                color={msg.isRead ? "#10B981" : "#93C5FD"}
                style={{ marginLeft: 4 }}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-gray-50"
    >
      {/* Header */}
      <View className="bg-white px-4 py-3 shadow-sm flex-row items-center">
        <TouchableOpacity className="mr-3" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>

        {/* User Profile */}
        <View className="flex-row items-center flex-1">
          {userProfile?.profilePhoto ? (
            <Image
              source={{ uri: userProfile.profilePhoto }}
              className="w-10 h-10 rounded-full mr-3"
            />
          ) : (
            <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
              <Text className="text-blue-600 font-semibold">
                {userName?.charAt(0) || "U"}
              </Text>
            </View>
          )}

          <View className="flex-1">
            <Text className="font-semibold text-gray-800">
              {userName || "Kullanıcı"}
            </Text>
            <View className="flex-row items-center">
              <View
                className={`w-2 h-2 rounded-full mr-2 ${
                  userProfile?.isOnline ? "bg-green-500" : "bg-gray-400"
                }`}
              />
              <Text className="text-gray-600 text-sm">
                {userProfile?.isOnline ? "Çevrimiçi" : "Çevrimdışı"}
              </Text>
            </View>
          </View>
        </View>

        {/* Header Actions */}
        <View className="flex-row space-x-3">
          <TouchableOpacity>
            <Ionicons name="call" size={20} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="videocam" size={20} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
      >
        {messages.map(renderMessage)}
      </ScrollView>

      {/* Message Input */}
      <View className="bg-white px-4 py-3 border-t border-gray-200">
        <View className="flex-row items-center space-x-3">
          {/* Voice Message Button */}
          <TouchableOpacity
            className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
            onPress={handleVoiceMessage}
          >
            <Ionicons name="mic" size={20} color="#6B7280" />
          </TouchableOpacity>

          {/* Text Input */}
          <View className="flex-1 flex-row items-center bg-gray-100 rounded-full px-4 py-2">
            <TextInput
              className="flex-1 text-gray-800"
              placeholder="Mesaj yazın..."
              value={message}
              onChangeText={setMessage}
              multiline
              maxLength={500}
            />
            <TouchableOpacity className="ml-2" onPress={handleImagePicker}>
              <Ionicons name="image" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          {/* Send Button */}
          <TouchableOpacity
            className={`w-10 h-10 rounded-full items-center justify-center ${
              message.trim() ? "bg-blue-600" : "bg-gray-300"
            }`}
            onPress={handleSendMessage}
            disabled={!message.trim()}
          >
            <Ionicons
              name="send"
              size={18}
              color={message.trim() ? "white" : "#9CA3AF"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}



