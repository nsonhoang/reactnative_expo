import { colors, commonStyles } from "@/styles/commonStyles";
import { StyleSheet, Text, View } from "react-native";

const FormInputInformation = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          commonStyles.card,
          commonStyles.marginBottom,
          styles.contactContainer,
        ]}
      >
        <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
          Thông tin liên lạc
        </Text>
        {/* container input full name  */}
        <View style={{ marginBottom: 16 }}>
          <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
            Full Name *
          </Text>
          <View
            style={{
              backgroundColor: colors.backgroundAlt,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={[commonStyles.text, { color: colors.textLight }]}>
              {"Enter your full name"}
            </Text>
          </View>
        </View>
        {/* container input phone  */}
        <View style={{ marginBottom: 16 }}>
          <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
            Phone Number *
          </Text>
          <View
            style={{
              backgroundColor: colors.backgroundAlt,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={[commonStyles.text, { color: colors.textLight }]}>
              {"Phone Number"}
            </Text>
          </View>
        </View>
        {/* container input Email  */}
        <View style={{ marginBottom: 16 }}>
          <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
            Email *
          </Text>
          <View
            style={{
              backgroundColor: colors.backgroundAlt,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={[commonStyles.text, { color: colors.textLight }]}>
              {"Email"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  contactContainer: {
    flexDirection: "column",
  },
});

export default FormInputInformation;
