import { VALUE_DEFAULT } from "@/constants/Values";
import { commonStyles } from "@/styles/commonStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

function ItemOption({
  nameIcon,
  size,
  title,
  onPress,
}: {
  nameIcon: keyof typeof MaterialIcons.glyphMap;
  size: number;
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={[commonStyles.card, styles.cardItem]}>
        <MaterialIcons size={size} name={nameIcon} style={styles.itemIcon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    borderWidth: 1,
    borderColor: VALUE_DEFAULT.SECONDARY_COLOR,
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    fontWeight: "bold",
    marginLeft: 10,
  },
  itemIcon: {},
});

export default ItemOption;
