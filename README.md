# BanaGüven - Güvenli Sosyal Medya Uygulaması

BanaGüven, gerçek kişilerin yer aldığı güvenli bir sosyal ortam sağlayan React Native uygulamasıdır.

## 🚀 Özellikler

### 🔐 Güvenlik ve Doğrulama

- **TC Kimlik Doğrulaması**: Sahte hesapların önüne geçmek için TC Kimlik numarası ile doğrulama
- **Yıldızlı Hesap Sistemi**: Sabıka kaydı ve selfie doğrulaması ile güvenilir hesaplar
- **Gizlilik Odaklı**: Kişisel bilgiler gizli tutulur, sadece izin verilen bilgiler paylaşılır

### 👥 Sosyal Özellikler

- **Keşfet**: Yeni insanlarla tanışma
- **Arkadaşlık Sistemi**: Arkadaşlık istekleri ve yönetimi
- **Mesajlaşma**: Güvenli sohbet sistemi
- **Fotoğraf Galerisi**: Arkadaşlarla fotoğraf paylaşımı

### 🛡️ Yönetim Paneli

- **Admin Kontrolü**: Yıldızlı hesap başvurularını onaylama/reddetme
- **Sabıka Kaydı Kontrolü**: Yüklenen belgeleri inceleme
- **Kullanıcı Yönetimi**: Hesap durumlarını takip etme

## 📱 Ekranlar

### Kimlik Doğrulama

- **Giriş Ekranı**: Kullanıcı adı ve şifre ile giriş
- **Kayıt Ekranı**: TC Kimlik doğrulaması ile kayıt
- **Kimlik Doğrulama**: TC Kimlik numarası ile otomatik bilgi çekme

### Ana Ekranlar

- **Ana Sayfa**: Genel bakış ve hızlı erişim
- **Keşfet**: Yeni kullanıcıları keşfetme
- **Arkadaşlar**: Arkadaş listesi ve istek yönetimi
- **Mesajlar**: Sohbet listesi
- **Profil**: Kullanıcı profili ve ayarlar

### Özel Ekranlar

- **Sohbet**: Birebir mesajlaşma
- **Fotoğraf Galerisi**: Fotoğraf paylaşımı
- **Yönetim Paneli**: Admin kontrol paneli

## 🛠️ Teknolojiler

- **React Native**: Mobil uygulama geliştirme
- **Expo**: Geliştirme ve dağıtım platformu
- **React Navigation**: Sayfa geçişleri
- **NativeWind**: Tailwind CSS ile styling
- **Expo Secure Store**: Güvenli veri saklama
- **Expo Image Picker**: Fotoğraf seçme
- **Expo Notifications**: Push bildirimler

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

2. **Uygulamayı başlatın:**

   ```bash
   npm start
   ```

3. **Platform seçin:**
   - iOS: `npm run ios`
   - Android: `npm run android`
   - Web: `npm run web`

## 🔧 Geliştirme

### Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
├── screens/            # Uygulama ekranları
│   ├── auth/          # Kimlik doğrulama ekranları
│   ├── main/          # Ana ekranlar
│   ├── chat/          # Sohbet ekranları
│   ├── gallery/       # Fotoğraf galerisi
│   └── admin/         # Yönetim paneli
├── navigation/         # Navigasyon yapılandırması
├── contexts/          # React Context'ler
├── services/          # API servisleri
├── utils/             # Yardımcı fonksiyonlar
└── types/             # TypeScript tip tanımları
```

### Önemli Özellikler

#### TC Kimlik Doğrulaması

- TC Kimlik numarası ile otomatik isim, yaş ve cinsiyet bilgisi çekme
- Sahte hesapların önüne geçme
- Gizlilik garantisi

#### Yıldızlı Hesap Sistemi

- Profil bilgilerinin eksiksiz doldurulması
- Selfie ile profil fotoğrafı doğrulaması
- Sabıka kaydı yükleme
- Admin onayı ile yıldızlı hesap olma

#### Güvenlik Önlemleri

- Kişisel bilgilerin gizli tutulması
- Sadece arkadaşlarla mesajlaşma
- Fotoğrafların sadece arkadaşlarca görüntülenmesi
- Güvenli veri saklama

## 📋 Gelecek Özellikler

- [ ] Push bildirimler
- [ ] Ücretlendirme sistemi
- [ ] Premium üyelik
- [ ] Grup sohbetleri
- [ ] Video arama
- [ ] Konum paylaşımı
- [ ] İlgi alanları eşleştirme

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Proje hakkında sorularınız için issue açabilirsiniz.

---

**BanaGüven** - Güvenli sosyal ortam için tasarlandı 🛡️






