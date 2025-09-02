import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Hata", "Kullanıcı adı ve şifre gereklidir");
      return;
    }

    setIsLoading(true);
    const result = await login({ username, password });
    setIsLoading(false);

    if (!result.success) {
      Alert.alert("Giriş Hatası", result.error || "Giriş yapılamadı");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-8">
          {/* Logo/Header */}
          <View className="items-center mb-12">
            <Text className="text-4xl font-bold text-blue-600 mb-2">
              BanaGüven
            </Text>
            <Text className="text-gray-600 text-center">
              Güvenli sosyal ortam
            </Text>
          </View>

          {/* Login Form */}
          <View className="space-y-4">
            <View>
              <Text className="text-gray-700 mb-2 font-medium">
                Kullanıcı Adı
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                placeholder="Kullanıcı adınızı girin"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2 font-medium">Şifre</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                placeholder="Şifrenizi girin"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              className={`bg-blue-600 rounded-lg py-4 mt-6 ${
                isLoading ? "opacity-50" : ""
              }`}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text className="text-white text-center text-lg font-semibold">
                {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="mt-4"
              onPress={() => navigation.navigate("Register")}
            >
              <Text className="text-blue-600 text-center">
                Hesabınız yok mu? Kayıt olun
              </Text>
            </TouchableOpacity>
          </View>

          {/* Test Kullanıcıları */}
          <View className="mt-8 p-4 bg-green-50 rounded-lg">
            <Text className="text-green-800 font-semibold mb-3">
              🧪 Test Kullanıcıları:
            </Text>
            <View className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-green-700 text-sm font-medium">
                  Admin:
                </Text>
                <Text className="text-green-600 text-sm">admin / admin123</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-green-700 text-sm font-medium">
                  Test:
                </Text>
                <Text className="text-green-600 text-sm">test / test123</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-green-700 text-sm font-medium">
                  Demo:
                </Text>
                <Text className="text-green-600 text-sm">demo / demo123</Text>
              </View>
            </View>
          </View>

          {/* Features Info */}
          <View className="mt-4 p-4 bg-blue-50 rounded-lg">
            <Text className="text-blue-800 font-semibold mb-2">
              BanaGüven Özellikleri:
            </Text>
            <Text className="text-blue-700 text-sm mb-1">
              • TC Kimlik doğrulaması ile güvenli ortam
            </Text>
            <Text className="text-blue-700 text-sm mb-1">
              • Gerçek kişilerle tanışma
            </Text>
            <Text className="text-blue-700 text-sm mb-1">
              • Yıldızlı hesap sistemi
            </Text>
            <Text className="text-blue-700 text-sm">
              • Gizlilik odaklı tasarım
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
