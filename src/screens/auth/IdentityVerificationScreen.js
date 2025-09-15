import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";

export default function IdentityVerificationScreen({ navigation, route }) {
  const { userData } = route.params || {};
  const [isLoading, setIsLoading] = useState(false);

  const handleVerification = async () => {
    setIsLoading(true);

    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        "Doğrulama Başarılı",
        "Kimlik bilgileriniz doğrulandı. Artık uygulamayı kullanabilirsiniz.",
        [
          {
            text: "Tamam",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    }, 2000);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 justify-center px-8 py-12">
        {/* Header */}
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-4">
            <Text className="text-3xl">🔐</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            Kimlik Doğrulama
          </Text>
          <Text className="text-gray-600 text-center">
            Güvenli ortam için kimlik bilgileriniz doğrulanacak
          </Text>
        </View>

        {/* Verification Info */}
        <View className="bg-blue-50 p-6 rounded-lg mb-8">
          <Text className="text-blue-800 font-semibold mb-4">
            Doğrulanan Bilgiler:
          </Text>

          {userData && (
            <>
              <View className="flex-row justify-between mb-2">
                <Text className="text-blue-700">İsim:</Text>
                <Text className="text-blue-800 font-medium">
                  {userData.name}
                </Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-blue-700">Yaş:</Text>
                <Text className="text-blue-800 font-medium">
                  {userData.age}
                </Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-blue-700">Cinsiyet:</Text>
                <Text className="text-blue-800 font-medium">
                  {userData.gender}
                </Text>
              </View>
            </>
          )}
        </View>

        {/* Security Features */}
        <View className="mb-8">
          <Text className="text-gray-800 font-semibold mb-4">
            Güvenlik Özellikleri:
          </Text>

          <View className="space-y-3">
            <View className="flex-row items-center">
              <Text className="text-green-600 mr-3">✓</Text>
              <Text className="text-gray-700 flex-1">
                TC Kimlik numarası ile gerçek kişi doğrulaması
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-green-600 mr-3">✓</Text>
              <Text className="text-gray-700 flex-1">
                Sahte hesapların önüne geçme
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-green-600 mr-3">✓</Text>
              <Text className="text-gray-700 flex-1">
                Gizlilik odaklı tasarım
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-green-600 mr-3">✓</Text>
              <Text className="text-gray-700 flex-1">
                Güvenli iletişim ortamı
              </Text>
            </View>
          </View>
        </View>

        {/* Privacy Notice */}
        <View className="bg-yellow-50 p-4 rounded-lg mb-8">
          <Text className="text-yellow-800 font-semibold mb-2">
            Gizlilik Garantisi
          </Text>
          <Text className="text-yellow-700 text-sm">
            Kimlik bilgileriniz sadece doğrulama amaçlı kullanılır ve diğer
            üyelerle paylaşılmaz. Tüm verileriniz güvenli şekilde saklanır.
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="space-y-4">
          <TouchableOpacity
            className={`bg-blue-600 rounded-lg py-4 ${
              isLoading ? "opacity-50" : ""
            }`}
            onPress={handleVerification}
            disabled={isLoading}
          >
            <Text className="text-white text-center text-lg font-semibold">
              {isLoading ? "Doğrulanıyor..." : "Doğrulamayı Tamamla"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-300 rounded-lg py-4"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-gray-700 text-center text-lg font-semibold">
              Geri Dön
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}






