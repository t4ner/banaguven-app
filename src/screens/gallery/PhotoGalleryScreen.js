import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function PhotoGalleryScreen({ navigation, route }) {
  const { userId, userName } = route.params || {};
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Mock photos
  const photos = [
    {
      id: "1",
      uri: "https://picsum.photos/400/400?random=1",
      caption: "Güzel bir gün",
      uploadDate: "2 gün önce",
      likes: 12,
    },
    {
      id: "2",
      uri: "https://picsum.photos/400/400?random=2",
      caption: "Doğa yürüyüşü",
      uploadDate: "1 hafta önce",
      likes: 8,
    },
    {
      id: "3",
      uri: "https://picsum.photos/400/400?random=3",
      caption: "Yemek fotoğrafı",
      uploadDate: "2 hafta önce",
      likes: 15,
    },
    {
      id: "4",
      uri: "https://picsum.photos/400/400?random=4",
      caption: "Seyahat anısı",
      uploadDate: "3 hafta önce",
      likes: 22,
    },
    {
      id: "5",
      uri: "https://picsum.photos/400/400?random=5",
      caption: "Arkadaşlarla",
      uploadDate: "1 ay önce",
      likes: 18,
    },
    {
      id: "6",
      uri: "https://picsum.photos/400/400?random=6",
      caption: "Hobi fotoğrafı",
      uploadDate: "1 ay önce",
      likes: 7,
    },
  ];

  const handlePhotoPress = (photo) => {
    setSelectedPhoto(photo);
    setIsModalVisible(true);
  };

  const handleLike = (photoId) => {
    Alert.alert("Beğeni", "Fotoğraf beğenildi!");
  };

  const handleAddPhoto = () => {
    Alert.alert("Fotoğraf Ekle", "Fotoğraf ekleme özelliği yakında eklenecek");
  };

  const renderPhotoGrid = () => {
    const photoSize = (width - 48) / 3; // 3 columns with padding

    return (
      <View className="flex-row flex-wrap justify-between px-6">
        {photos.map((photo, index) => (
          <TouchableOpacity
            key={photo.id}
            className="mb-3"
            style={{ width: photoSize, height: photoSize }}
            onPress={() => handlePhotoPress(photo)}
          >
            <Image
              source={{ uri: photo.uri }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />

            {/* Overlay Info */}
            <View className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-lg p-2">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons name="heart" size={12} color="white" />
                  <Text className="text-white text-xs ml-1">{photo.likes}</Text>
                </View>
                <Text className="text-white text-xs">{photo.uploadDate}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderPhotoModal = () => (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View className="flex-1 bg-black bg-opacity-90 items-center justify-center">
        <TouchableOpacity
          className="absolute top-12 right-6 z-10"
          onPress={() => setIsModalVisible(false)}
        >
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>

        {selectedPhoto && (
          <View className="flex-1 items-center justify-center px-6">
            <Image
              source={{ uri: selectedPhoto.uri }}
              className="w-full h-3/4 rounded-lg"
              resizeMode="contain"
            />

            <View className="bg-white rounded-lg p-4 mt-4 w-full">
              <Text className="text-gray-800 font-semibold mb-2">
                {selectedPhoto.caption}
              </Text>

              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons name="time-outline" size={16} color="#6B7280" />
                  <Text className="text-gray-600 text-sm ml-1">
                    {selectedPhoto.uploadDate}
                  </Text>
                </View>

                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => handleLike(selectedPhoto.id)}
                >
                  <Ionicons name="heart-outline" size={16} color="#EF4444" />
                  <Text className="text-gray-600 text-sm ml-1">
                    {selectedPhoto.likes}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-3 shadow-sm flex-row items-center">
        <TouchableOpacity className="mr-3" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>

        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">
            {userName ? `${userName}'nin Fotoğrafları` : "Fotoğraf Galerisi"}
          </Text>
          <Text className="text-gray-600 text-sm">
            {photos.length} fotoğraf
          </Text>
        </View>

        <TouchableOpacity
          className="bg-blue-600 rounded-lg px-4 py-2"
          onPress={handleAddPhoto}
        >
          <Text className="text-white font-medium">Fotoğraf Ekle</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View className="bg-white px-6 py-4 shadow-sm">
        <View className="flex-row justify-around">
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-800">
              {photos.length}
            </Text>
            <Text className="text-gray-600 text-sm">Fotoğraf</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-800">
              {photos.reduce((sum, photo) => sum + photo.likes, 0)}
            </Text>
            <Text className="text-gray-600 text-sm">Toplam Beğeni</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-800">
              {Math.round(
                photos.reduce((sum, photo) => sum + photo.likes, 0) /
                  photos.length
              )}
            </Text>
            <Text className="text-gray-600 text-sm">Ortalama</Text>
          </View>
        </View>
      </View>

      {/* Photos Grid */}
      <ScrollView className="flex-1">
        {photos.length > 0 ? (
          renderPhotoGrid()
        ) : (
          <View className="items-center py-12">
            <Ionicons name="images-outline" size={64} color="#D1D5DB" />
            <Text className="text-gray-500 text-center mt-4">
              Henüz fotoğraf yok
            </Text>
            <Text className="text-gray-400 text-center text-sm mt-2">
              İlk fotoğrafınızı paylaşın
            </Text>
            <TouchableOpacity
              className="bg-blue-600 rounded-lg px-6 py-3 mt-4"
              onPress={handleAddPhoto}
            >
              <Text className="text-white font-medium">Fotoğraf Ekle</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Photo Modal */}
      {renderPhotoModal()}
    </View>
  );
}






