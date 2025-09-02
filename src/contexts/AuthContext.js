import React, { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStoredUser();
  }, []);

  const loadStoredUser = async () => {
    try {
      const storedUser = await SecureStore.getItemAsync("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error loading stored user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      // Test kullanıcıları
      const testUsers = {
        admin: {
          id: "1",
          username: "admin",
          password: "admin123",
          tcKimlik: "12345678901",
          name: "Admin User",
          age: 30,
          gender: "Erkek",
          phone: "5551234567",
          email: "admin@banaguven.com",
          profilePhoto: null,
          isVerified: true,
          isStarred: true,
          isAdmin: true,
          createdAt: new Date().toISOString(),
        },
        test: {
          id: "2",
          username: "test",
          password: "test123",
          tcKimlik: "98765432109",
          name: "Test User",
          age: 25,
          gender: "Kadın",
          phone: "5559876543",
          email: "test@banaguven.com",
          profilePhoto: null,
          isVerified: true,
          isStarred: false,
          isAdmin: false,
          createdAt: new Date().toISOString(),
        },
        demo: {
          id: "3",
          username: "demo",
          password: "demo123",
          tcKimlik: "11111111111",
          name: "Demo User",
          age: 28,
          gender: "Erkek",
          phone: "5551111111",
          email: "demo@banaguven.com",
          profilePhoto: null,
          isVerified: false,
          isStarred: false,
          isAdmin: false,
          createdAt: new Date().toISOString(),
        },
      };

      const user = testUsers[credentials.username];

      if (!user || user.password !== credentials.password) {
        return { success: false, error: "Kullanıcı adı veya şifre hatalı!" };
      }

      // Şifreyi kullanıcı objesinden çıkar
      const { password, ...userWithoutPassword } = user;

      setUser(userWithoutPassword);
      await SecureStore.setItemAsync(
        "user",
        JSON.stringify(userWithoutPassword)
      );
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      // Simulate API call
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        isVerified: false,
        isStarred: false,
        isAdmin: false,
        createdAt: new Date().toISOString(),
      };

      setUser(newUser);
      await SecureStore.setItemAsync("user", JSON.stringify(newUser));
      return { success: true };
    } catch (error) {
      console.error("Register error:", error);
      return { success: false, error: error.message };
    }
  };

  const verifyIdentity = async (tcKimlik) => {
    try {
      // Simulate TC Kimlik verification API
      // In real app, this would call a government API
      const mockResponse = {
        name: "Test User",
        age: 25,
        gender: "Erkek",
        isValid: true,
      };

      return { success: true, data: mockResponse };
    } catch (error) {
      console.error("Identity verification error:", error);
      return { success: false, error: error.message };
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const updatedUser = { ...user, ...profileData };
      setUser(updatedUser);
      await SecureStore.setItemAsync("user", JSON.stringify(updatedUser));
      return { success: true };
    } catch (error) {
      console.error("Profile update error:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await SecureStore.deleteItemAsync("user");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    verifyIdentity,
    updateProfile,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
