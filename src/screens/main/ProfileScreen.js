import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

export default function ProfileScreen({ navigation }) {
  const { user, logout, updateProfile } = useAuth();
  const [isStarredAccount, setIsStarredAccount] = useState(
    user?.isStarred || false
  );
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationSharing, setLocationSharing] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      "Çıkış Yap",
      "Hesabınızdan çıkış yapmak istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Çıkış Yap",
          style: "destructive",
          onPress: logout,
        },
      ]
    );
  };

  const handleStarredAccount = () => {
    if (!isStarredAccount) {
      Alert.alert(
        "Yıldızlı Hesap",
        "Yıldızlı hesap olmak için:\n\n• Profil bilgilerinizi eksiksiz doldurun\n• Selfie ile profil fotoğrafı doğrulaması yapın\n• Sabıka kaydı yükleyin\n\nDevam etmek istiyor musunuz?",
        [
          { text: "İptal", style: "cancel" },
          {
            text: "Devam Et",
            onPress: () => {
              // Navigate to starred account process
              Alert.alert("Bilgi", "Yıldızlı hesap süreci başlatılacak");
            },
          },
        ]
      );
    }
  };

  const profileMenuItems = [
    {
      title: "Profil Bilgileri",
      subtitle: "Kişisel bilgilerinizi düzenleyin",
      icon: "person-outline",
      onPress: () => Alert.alert("Bilgi", "Profil düzenleme ekranı açılacak"),
    },
    {
      title: "Gizlilik Ayarları",
      subtitle: "Hesap gizliliğinizi yönetin",
      icon: "shield-outline",
      onPress: () => Alert.alert("Bilgi", "Gizlilik ayarları ekranı açılacak"),
    },
    {
      title: "Bildirimler",
      subtitle: "Bildirim tercihlerinizi ayarlayın",
      icon: "notifications-outline",
      onPress: () => Alert.alert("Bilgi", "Bildirim ayarları ekranı açılacak"),
    },
    {
      title: "Güvenlik",
      subtitle: "Şifre ve güvenlik ayarları",
      icon: "lock-closed-outline",
      onPress: () => Alert.alert("Bilgi", "Güvenlik ayarları ekranı açılacak"),
    },
    {
      title: "Yardım ve Destek",
      subtitle: "SSS ve iletişim",
      icon: "help-circle-outline",
      onPress: () => Alert.alert("Bilgi", "Yardım ekranı açılacak"),
    },
    {
      title: "Hakkında",
      subtitle: "Uygulama bilgileri",
      icon: "information-circle-outline",
      onPress: () => Alert.alert("Bilgi", "Hakkında ekranı açılacak"),
    },
  ];

  const stats = [
    { label: "Arkadaş", value: "12" },
    { label: "Mesaj", value: "48" },
    { label: "Fotoğraf", value: "8" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-6 shadow-sm">
        <View className="items-center">
          {/* Profile Photo */}
          {user?.profilePhoto ? (
            <Image
              source={{ uri: user.profilePhoto }}
              className="w-24 h-24 rounded-full mb-4"
            />
          ) : (
            <View className="w-24 h-24 bg-blue-100 rounded-full items-center justify-center mb-4">
              <Text className="text-blue-600 text-3xl font-semibold">
                {user?.name?.charAt(0) || "U"}
              </Text>
            </View>
          )}

          {/* User Info */}
          <Text className="text-2xl font-bold text-gray-800 mb-1">
            {user?.name || "Kullanıcı"}
          </Text>
          <Text className="text-gray-600 mb-2">
            @{user?.username || "kullanici"}
          </Text>

          {/* Verification Status */}
          <View className="flex-row items-center mb-4">
            {user?.isVerified ? (
              <View className="bg-green-100 rounded-full px-3 py-1 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#059669" />
                <Text className="text-green-700 text-sm ml-1">Doğrulanmış</Text>
              </View>
            ) : (
              <View className="bg-yellow-100 rounded-full px-3 py-1 flex-row items-center">
                <Ionicons name="time-outline" size={16} color="#D97706" />
                <Text className="text-yellow-700 text-sm ml-1">
                  Doğrulama Bekliyor
                </Text>
              </View>
            )}

            {user?.isStarred && (
              <View className="bg-yellow-100 rounded-full px-3 py-1 flex-row items-center ml-2">
                <Text className="text-yellow-700 text-sm">⭐ Yıldızlı</Text>
              </View>
            )}
          </View>

          {/* Stats */}
          <View className="flex-row space-x-8">
            {stats.map((stat, index) => (
              <View key={index} className="items-center">
                <Text className="text-xl font-bold text-gray-800">
                  {stat.value}
                </Text>
                <Text className="text-gray-600 text-sm">{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Starred Account Section */}
      {!isStarredAccount && (
        <View className="px-6 py-4">
          <TouchableOpacity
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4"
            onPress={handleStarredAccount}
          >
            <View className="flex-row items-center">
              <Text className="text-white text-2xl mr-3">⭐</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold text-lg">
                  Yıldızlı Hesap Ol
                </Text>
                <Text className="text-white text-sm">
                  Güvenilirlik ve özel özellikler için
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Quick Settings */}
      <View className="px-6 py-4">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Hızlı Ayarlar
        </Text>
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <View className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="notifications" size={20} color="#6B7280" />
              <Text className="text-gray-800 ml-3">Bildirimler</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#D1D5DB", true: "#3B82F6" }}
              thumbColor={notificationsEnabled ? "#FFFFFF" : "#FFFFFF"}
            />
          </View>

          <View className="border-t border-gray-200" />

          <View className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="location" size={20} color="#6B7280" />
              <Text className="text-gray-800 ml-3">Konum Paylaşımı</Text>
            </View>
            <Switch
              value={locationSharing}
              onValueChange={setLocationSharing}
              trackColor={{ false: "#D1D5DB", true: "#3B82F6" }}
              thumbColor={locationSharing ? "#FFFFFF" : "#FFFFFF"}
            />
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <View className="px-6 py-4">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Hesap Ayarları
        </Text>
        <View className="bg-white rounded-lg shadow-sm">
          {profileMenuItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                className="flex-row items-center p-4"
                onPress={item.onPress}
              >
                <Ionicons name={item.icon} size={20} color="#6B7280" />
                <View className="flex-1 ml-3">
                  <Text className="text-gray-800 font-medium">
                    {item.title}
                  </Text>
                  <Text className="text-gray-600 text-sm">{item.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
              </TouchableOpacity>
              {index < profileMenuItems.length - 1 && (
                <View className="border-t border-gray-200 ml-12" />
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Admin Panel Access */}
      {user?.isAdmin && (
        <View className="px-6 py-4">
          <TouchableOpacity
            className="bg-red-600 rounded-lg p-4"
            onPress={() => navigation.navigate("AdminPanel")}
          >
            <View className="flex-row items-center">
              <Ionicons name="shield" size={20} color="white" />
              <Text className="text-white font-semibold ml-3">
                Yönetim Paneli
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Logout */}
      <View className="px-6 py-4">
        <TouchableOpacity
          className="bg-red-50 border border-red-200 rounded-lg p-4"
          onPress={handleLogout}
        >
          <View className="flex-row items-center">
            <Ionicons name="log-out-outline" size={20} color="#DC2626" />
            <Text className="text-red-600 font-semibold ml-3">Çıkış Yap</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* App Version */}
      <View className="px-6 py-4">
        <Text className="text-gray-400 text-center text-sm">
          BanaGüven v1.0.0
        </Text>
      </View>
    </ScrollView>
  );
}








