import { VALUE_DEFAULT } from "@/constants/Values";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface BookingItemProps {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  information?: string;
  onPress?: () => void;
}

const BookingItem: React.FC<BookingItemProps> = ({
  onPress,
  title,
  icon,
  information,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name={icon}
            size={VALUE_DEFAULT.SIZE_TITLE_LARGE}
            color={VALUE_DEFAULT.PRIMARY_COLOR}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {information !== undefined ? (
          <View style={styles.informationContainer}>
            <Text style={styles.information}>{information}</Text>
          </View>
        ) : (
          <View>
            <MaterialIcons
              name="arrow-forward-ios"
              size={VALUE_DEFAULT.SIZE_TITLE_LARGE}
              color={VALUE_DEFAULT.PRIMARY_COLOR}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: VALUE_DEFAULT.SECONDARY_COLOR,
  },
  iconContainer: {
    padding: 5,
  },
  icon: {},
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
  },
  informationContainer: {},
  information: {
    color: VALUE_DEFAULT.PRIMARY_COLOR,
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
  },
});

export default BookingItem;
