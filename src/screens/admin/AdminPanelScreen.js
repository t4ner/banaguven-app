import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AdminPanelScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("pending"); // pending, approved, rejected
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Mock data
  const pendingUsers = [
    {
      id: "1",
      name: "Ahmet Yılmaz",
      username: "ahmetyilmaz",
      tcKimlik: "12345678901",
      email: "ahmet@example.com",
      phone: "5551234567",
      profilePhoto: null,
      applicationDate: "2024-01-15",
      criminalRecord: {
        uploaded: true,
        fileName: "sabika_kaydi_ahmet.pdf",
        uploadDate: "2024-01-15",
      },
      selfieVerified: true,
    },
    {
      id: "2",
      name: "Ayşe Demir",
      username: "aysedemir",
      tcKimlik: "12345678902",
      email: "ayse@example.com",
      phone: "5551234568",
      profilePhoto: null,
      applicationDate: "2024-01-14",
      criminalRecord: {
        uploaded: true,
        fileName: "sabika_kaydi_ayse.pdf",
        uploadDate: "2024-01-14",
      },
      selfieVerified: true,
    },
  ];

  const approvedUsers = [
    {
      id: "3",
      name: "Mehmet Kaya",
      username: "mehmetkaya",
      tcKimlik: "12345678903",
      email: "mehmet@example.com",
      phone: "5551234569",
      profilePhoto: null,
      applicationDate: "2024-01-10",
      approvedDate: "2024-01-12",
      criminalRecord: {
        uploaded: true,
        fileName: "sabika_kaydi_mehmet.pdf",
        uploadDate: "2024-01-10",
      },
      selfieVerified: true,
    },
  ];

  const rejectedUsers = [
    {
      id: "4",
      name: "Fatma Özkan",
      username: "fatmaozkan",
      tcKimlik: "12345678904",
      email: "fatma@example.com",
      phone: "5551234570",
      profilePhoto: null,
      applicationDate: "2024-01-08",
      rejectedDate: "2024-01-09",
      rejectionReason: "Sabıka kaydı eksik",
      criminalRecord: {
        uploaded: false,
      },
      selfieVerified: false,
    },
  ];

  const handleApprove = (userId) => {
    Alert.alert(
      "Onayla",
      "Bu kullanıcının yıldızlı hesap başvurusunu onaylamak istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Onayla",
          onPress: () => {
            Alert.alert(
              "Başarılı",
              "Kullanıcı onaylandı ve yıldızlı hesap oldu"
            );
          },
        },
      ]
    );
  };

  const handleReject = (userId) => {
    Alert.alert(
      "Reddet",
      "Bu kullanıcının yıldızlı hesap başvurusunu reddetmek istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Reddet",
          style: "destructive",
          onPress: () => {
            Alert.alert("Bilgi", "Kullanıcı reddedildi");
          },
        },
      ]
    );
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "pending":
        return pendingUsers;
      case "approved":
        return approvedUsers;
      case "rejected":
        return rejectedUsers;
      default:
        return [];
    }
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

          {/* Status Badge */}
          <View
            className={`absolute -top-1 -right-1 rounded-full w-6 h-6 items-center justify-center ${
              activeTab === "pending"
                ? "bg-yellow-500"
                : activeTab === "approved"
                  ? "bg-green-500"
                  : "bg-red-500"
            }`}
          >
            <Text className="text-white text-xs">
              {activeTab === "pending"
                ? "⏳"
                : activeTab === "approved"
                  ? "✓"
                  : "✗"}
            </Text>
          </View>
        </View>

        {/* User Info */}
        <View className="flex-1 ml-4">
          <Text className="text-lg font-semibold text-gray-800">
            {user.name}
          </Text>
          <Text className="text-gray-600 text-sm">@{user.username}</Text>
          <Text className="text-gray-500 text-xs">TC: {user.tcKimlik}</Text>

          <View className="flex-row items-center mt-2">
            <View
              className={`w-3 h-3 rounded-full mr-2 ${
                user.criminalRecord.uploaded ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <Text className="text-gray-600 text-xs">
              Sabıka Kaydı:{" "}
              {user.criminalRecord.uploaded ? "Yüklendi" : "Eksik"}
            </Text>
          </View>

          <View className="flex-row items-center mt-1">
            <View
              className={`w-3 h-3 rounded-full mr-2 ${
                user.selfieVerified ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <Text className="text-gray-600 text-xs">
              Selfie Doğrulaması: {user.selfieVerified ? "Tamamlandı" : "Eksik"}
            </Text>
          </View>

          <Text className="text-gray-500 text-xs mt-1">
            Başvuru: {user.applicationDate}
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-col space-y-2">
          <TouchableOpacity
            className="bg-blue-600 rounded-lg px-3 py-2"
            onPress={() => handleViewDetails(user)}
          >
            <Text className="text-white text-xs font-medium">Detay</Text>
          </TouchableOpacity>

          {activeTab === "pending" && (
            <View className="flex-row space-x-1">
              <TouchableOpacity
                className="bg-green-600 rounded-lg px-2 py-1"
                onPress={() => handleApprove(user.id)}
              >
                <Ionicons name="checkmark" size={12} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-red-600 rounded-lg px-2 py-1"
                onPress={() => handleReject(user.id)}
              >
                <Ionicons name="close" size={12} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );

  const renderUserModal = () => (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View className="flex-1 bg-black bg-opacity-50 items-center justify-center px-6">
        <View className="bg-white rounded-lg p-6 w-full max-h-[80%]">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-gray-800">
              Kullanıcı Detayları
            </Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Ionicons name="close" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>

          {selectedUser && (
            <ScrollView>
              <View className="items-center mb-6">
                {selectedUser.profilePhoto ? (
                  <Image
                    source={{ uri: selectedUser.profilePhoto }}
                    className="w-20 h-20 rounded-full mb-3"
                  />
                ) : (
                  <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-3">
                    <Text className="text-blue-600 text-2xl font-semibold">
                      {selectedUser.name.charAt(0)}
                    </Text>
                  </View>
                )}
                <Text className="text-xl font-semibold text-gray-800">
                  {selectedUser.name}
                </Text>
                <Text className="text-gray-600">@{selectedUser.username}</Text>
              </View>

              <View className="space-y-4">
                <View>
                  <Text className="font-semibold text-gray-800 mb-1">
                    Kişisel Bilgiler
                  </Text>
                  <View className="bg-gray-50 rounded-lg p-3">
                    <Text className="text-gray-700">
                      TC Kimlik: {selectedUser.tcKimlik}
                    </Text>
                    <Text className="text-gray-700">
                      E-posta: {selectedUser.email}
                    </Text>
                    <Text className="text-gray-700">
                      Telefon: {selectedUser.phone}
                    </Text>
                  </View>
                </View>

                <View>
                  <Text className="font-semibold text-gray-800 mb-1">
                    Başvuru Durumu
                  </Text>
                  <View className="bg-gray-50 rounded-lg p-3">
                    <Text className="text-gray-700">
                      Başvuru Tarihi: {selectedUser.applicationDate}
                    </Text>
                    {selectedUser.approvedDate && (
                      <Text className="text-gray-700">
                        Onay Tarihi: {selectedUser.approvedDate}
                      </Text>
                    )}
                    {selectedUser.rejectedDate && (
                      <Text className="text-gray-700">
                        Red Tarihi: {selectedUser.rejectedDate}
                      </Text>
                    )}
                    {selectedUser.rejectionReason && (
                      <Text className="text-gray-700">
                        Red Sebebi: {selectedUser.rejectionReason}
                      </Text>
                    )}
                  </View>
                </View>

                <View>
                  <Text className="font-semibold text-gray-800 mb-1">
                    Doğrulama Durumu
                  </Text>
                  <View className="bg-gray-50 rounded-lg p-3">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-gray-700">Sabıka Kaydı:</Text>
                      <View
                        className={`px-2 py-1 rounded ${
                          selectedUser.criminalRecord.uploaded
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        <Text
                          className={`text-xs ${
                            selectedUser.criminalRecord.uploaded
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {selectedUser.criminalRecord.uploaded
                            ? "Yüklendi"
                            : "Eksik"}
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-center justify-between">
                      <Text className="text-gray-700">Selfie Doğrulaması:</Text>
                      <View
                        className={`px-2 py-1 rounded ${
                          selectedUser.selfieVerified
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        <Text
                          className={`text-xs ${
                            selectedUser.selfieVerified
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {selectedUser.selfieVerified ? "Tamamlandı" : "Eksik"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {selectedUser.criminalRecord.uploaded && (
                  <View>
                    <Text className="font-semibold text-gray-800 mb-1">
                      Sabıka Kaydı
                    </Text>
                    <View className="bg-gray-50 rounded-lg p-3">
                      <Text className="text-gray-700">
                        Dosya: {selectedUser.criminalRecord.fileName}
                      </Text>
                      <Text className="text-gray-700">
                        Yükleme: {selectedUser.criminalRecord.uploadDate}
                      </Text>
                      <TouchableOpacity className="bg-blue-600 rounded-lg py-2 mt-2">
                        <Text className="text-white text-center font-medium">
                          Dosyayı Görüntüle
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4 shadow-sm">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-2xl font-bold text-gray-800">
            Yönetim Paneli
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View className="flex-row bg-gray-100 rounded-lg p-1">
          {[
            { key: "pending", label: "Bekleyen", count: pendingUsers.length },
            {
              key: "approved",
              label: "Onaylanan",
              count: approvedUsers.length,
            },
            {
              key: "rejected",
              label: "Reddedilen",
              count: rejectedUsers.length,
            },
          ].map((tab) => (
            <TouchableOpacity
              key={tab.key}
              className={`flex-1 py-2 rounded-md ${
                activeTab === tab.key ? "bg-white shadow-sm" : ""
              }`}
              onPress={() => setActiveTab(tab.key)}
            >
              <View className="items-center">
                <Text
                  className={`font-medium ${
                    activeTab === tab.key ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {tab.label}
                </Text>
                {tab.count > 0 && (
                  <View className="bg-blue-600 rounded-full w-5 h-5 items-center justify-center mt-1">
                    <Text className="text-white text-xs font-bold">
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
        {getCurrentData().length > 0 ? (
          getCurrentData().map(renderUserCard)
        ) : (
          <View className="items-center py-12">
            <Ionicons name="people-outline" size={64} color="#D1D5DB" />
            <Text className="text-gray-500 text-center mt-4">
              {activeTab === "pending" && "Bekleyen başvuru yok"}
              {activeTab === "approved" && "Onaylanan başvuru yok"}
              {activeTab === "rejected" && "Reddedilen başvuru yok"}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* User Details Modal */}
      {renderUserModal()}
    </View>
  );
}





