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

export default function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    tcKimlik: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Basic info, 2: Contact info
  const { register, verifyIdentity } = useAuth();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateTCKimlik = (tc) => {
    // Basic TC Kimlik validation
    return /^\d{11}$/.test(tc);
  };

  const handleNextStep = async () => {
    if (step === 1) {
      if (!formData.tcKimlik || !formData.username || !formData.password) {
        Alert.alert("Hata", "Tüm alanları doldurun");
        return;
      }

      if (!validateTCKimlik(formData.tcKimlik)) {
        Alert.alert("Hata", "Geçerli bir TC Kimlik numarası girin");
        return;
      }

      if (formData.password.length < 6) {
        Alert.alert("Hata", "Şifre en az 6 karakter olmalıdır");
        return;
      }

      // Verify TC Kimlik
      setIsLoading(true);
      const verification = await verifyIdentity(formData.tcKimlik);
      setIsLoading(false);

      if (verification.success) {
        setFormData((prev) => ({
          ...prev,
          name: verification.data.name,
          age: verification.data.age,
          gender: verification.data.gender,
        }));
        setStep(2);
      } else {
        Alert.alert("Doğrulama Hatası", "TC Kimlik numarası doğrulanamadı");
      }
    }
  };

  const handleRegister = async () => {
    if (!formData.phone && !formData.email) {
      Alert.alert("Hata", "Telefon numarası veya e-posta adresi gereklidir");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Hata", "Şifreler eşleşmiyor");
      return;
    }

    setIsLoading(true);
    const result = await register(formData);
    setIsLoading(false);

    if (result.success) {
      Alert.alert("Başarılı", "Hesabınız oluşturuldu!", [
        { text: "Tamam", onPress: () => navigation.navigate("Login") },
      ]);
    } else {
      Alert.alert("Kayıt Hatası", result.error || "Kayıt yapılamadı");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-8">
          {/* Header */}
          <View className="items-center mb-8">
            <Text className="text-3xl font-bold text-blue-600 mb-2">
              Kayıt Ol
            </Text>
            <Text className="text-gray-600 text-center">Adım {step}/2</Text>
          </View>

          {step === 1 ? (
            // Step 1: Basic Information
            <View className="space-y-4">
              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  TC Kimlik / Yabancı Kimlik No *
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                  placeholder="11 haneli kimlik numaranız"
                  value={formData.tcKimlik}
                  onChangeText={(value) => handleInputChange("tcKimlik", value)}
                  keyboardType="numeric"
                  maxLength={11}
                />
                <Text className="text-xs text-gray-500 mt-1">
                  Bu bilgi gizli tutulur ve diğer üyelerle paylaşılmaz
                </Text>
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  Kullanıcı Adı *
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                  placeholder="Kullanıcı adınızı seçin"
                  value={formData.username}
                  onChangeText={(value) => handleInputChange("username", value)}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">Şifre *</Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                  placeholder="En az 6 karakter"
                  value={formData.password}
                  onChangeText={(value) => handleInputChange("password", value)}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                className={`bg-blue-600 rounded-lg py-4 mt-6 ${
                  isLoading ? "opacity-50" : ""
                }`}
                onPress={handleNextStep}
                disabled={isLoading}
              >
                <Text className="text-white text-center text-lg font-semibold">
                  {isLoading ? "Doğrulanıyor..." : "Devam Et"}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            // Step 2: Contact Information
            <View className="space-y-4">
              <View className="bg-green-50 p-4 rounded-lg mb-4">
                <Text className="text-green-800 font-semibold mb-2">
                  Kimlik Doğrulandı ✓
                </Text>
                <Text className="text-green-700 text-sm">
                  İsim: {formData.name} | Yaş: {formData.age} | Cinsiyet:{" "}
                  {formData.gender}
                </Text>
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  GSM Numarası
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                  placeholder="0555 123 45 67"
                  value={formData.phone}
                  onChangeText={(value) => handleInputChange("phone", value)}
                  keyboardType="phone-pad"
                />
              </View>

              <Text className="text-center text-gray-500">veya</Text>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  E-posta Adresi
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onChangeText={(value) => handleInputChange("email", value)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  Şifre Tekrar
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
                  placeholder="Şifrenizi tekrar girin"
                  value={formData.confirmPassword}
                  onChangeText={(value) =>
                    handleInputChange("confirmPassword", value)
                  }
                  secureTextEntry
                />
              </View>

              <View className="flex-row space-x-4">
                <TouchableOpacity
                  className="flex-1 bg-gray-300 rounded-lg py-4"
                  onPress={() => setStep(1)}
                >
                  <Text className="text-gray-700 text-center text-lg font-semibold">
                    Geri
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className={`flex-1 bg-blue-600 rounded-lg py-4 ${
                    isLoading ? "opacity-50" : ""
                  }`}
                  onPress={handleRegister}
                  disabled={isLoading}
                >
                  <Text className="text-white text-center text-lg font-semibold">
                    {isLoading ? "Kayıt yapılıyor..." : "Kayıt Ol"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <TouchableOpacity
            className="mt-6"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-blue-600 text-center">
              Zaten hesabınız var mı? Giriş yapın
            </Text>
          </TouchableOpacity>

          {/* Privacy Notice */}
          <View className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <Text className="text-yellow-800 font-semibold mb-2">
              Gizlilik Bildirimi
            </Text>
            <Text className="text-yellow-700 text-xs">
              TC kimlik numaranız sadece sahte hesapların önüne geçmek ve gerçek
              kişilerle iletişim kurmanız için istenmektedir. Bu bilgi gizli
              tutulur ve diğer üyelerle paylaşılmaz.
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


