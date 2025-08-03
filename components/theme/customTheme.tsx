import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface GradientComponentProps {
  children?: React.ReactNode;
  style?: object;
}

const CustomTheme: React.FC<GradientComponentProps> = ({ children, style }) => {
  return (
    <LinearGradient
      colors={[
        "rgba(255, 255, 255, 1)",
        "rgba(145, 242, 233, 1)",
        "rgba(255, 255, 255, 1)",
      ]}
      locations={[0.06, 0.43, 1]} // 6%, 43%, 100%
      start={{ x: 0, y: 0 }} // Hướng ngang (90deg)
      end={{ x: 0, y: 1 }} //ket thuc o huong doc
      style={{ ...style }}
    >
      {children || <Text style={styles.text}>Nội dung mặc định</Text>}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default CustomTheme;
