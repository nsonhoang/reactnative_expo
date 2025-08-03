import { VALUE_DEFAULT } from "@/constants/Values";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";

export const colors = {
  primary: "#D4A574", // Muted gold
  secondary: "#8B4513", // Deep brown
  accent: "#B22222", // Deep red
  background: "#FDF5E6", // Light beige/cream
  backgroundAlt: "#F5F5DC", // Beige
  text: "#2F2F2F", // Dark gray
  textLight: "#666666", // Medium gray
  white: "#FFFFFF",
  border: "#E0E0E0",
  success: "#4CAF50",
  warning: "#FF9800",
  error: "#F44336",
  shadow: "rgba(0, 0, 0, 0.1)",
};

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    alignSelf: "center",
    width: "100%",
  },
  secondary: {
    backgroundColor: colors.secondary,
    alignSelf: "center",
    width: "100%",
  },
  accent: {
    backgroundColor: colors.accent,
    alignSelf: "center",
    width: "100%",
  },
  backButton: {
    backgroundColor: colors.text,
    alignSelf: "center",
    width: "100%",
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 800,
    width: "100%",
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  textLight: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textLight,
    lineHeight: 20,
  },
  section: {
    width: "100%",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    width: "100%",
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 3,
  },
  restaurantCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 4,
  },
  searchContainer: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    marginLeft: 10,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flex1: {
    flex: 1,
  },
  marginBottom: {
    marginBottom: 16,
  },
  marginTop: {
    marginTop: 16,
  },
  padding: {
    padding: 16,
  },
});
