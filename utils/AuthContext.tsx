import AsyncStorage from "@react-native-async-storage/async-storage"; // ✅ Thêm import này
import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync(); // Ngăn SplashScreen tự động ẩn

type AuthContextType = {
  isLoggedIn: boolean;
  isReady: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isReady: false,
  login: () => {},
  logout: () => {},
});
const authStorageKey = "authState";

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  // ✅ Sửa thành AsyncStorage
  const storageAuth = async (newState: { isLoggedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorageKey, jsonValue); // Thay localStorage bằng AsyncStorage
    } catch (error) {
      console.error("Error storing auth state:", error);
    }
  };

  const login = () => {
    setIsLoggedIn(true);
    router.replace("./(protected)/(tabs)/(home)");
    storageAuth({ isLoggedIn: true });
  };

  const logout = () => {
    setIsLoggedIn(false);
    router.replace("/login");
    storageAuth({ isLoggedIn: false });
  };

  useEffect(() => {
    const restoreAuth = async () => {
      await new Promise((res) => setTimeout(() => res(null), 1000)); // Giả lập thời gian tải dữ liệu

      try {
        const jsonValue = await AsyncStorage.getItem(authStorageKey); // Thay localStorage bằng AsyncStorage
        const authState = jsonValue ? JSON.parse(jsonValue) : null;
        if (authState) {
          setIsLoggedIn(authState.isLoggedIn);
        }
      } catch (error) {
        console.error("Error restoring auth state:", error);
      }
      setIsReady(true);
    };
    restoreAuth();
  }, [isReady]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync(); // Ẩn SplashScreen khi đã sẵn sàng
    }
  });
  return (
    <AuthContext.Provider value={{ isLoggedIn, isReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
