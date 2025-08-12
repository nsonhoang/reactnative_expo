import { PriceItem } from "@/app/(protected)/(tabs)/(home)/restaurants/[id]";
import { VALUE_DEFAULT } from "@/constants/Values";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type RestaurantDetailsProps = {
  summary: string;
  priceTable: PriceItem[];
  regulations: string[];
  amenities: string[];
};

const formatPrice = (price: number) => {
  return price.toLocaleString("vi-VN") + "đ";
};

const RestaurantInformation: React.FC<RestaurantDetailsProps> = ({
  summary,
  priceTable,
  regulations,
  amenities,
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Tóm tắt</Text>
      <View style={styles.regulations}>
        <Text style={styles.regulationItem}>{summary}</Text>
      </View>

      <Text style={styles.sectionTitle}>Bảng giá</Text>
      <View style={styles.priceTable}>
        {priceTable.map((row, idx) => (
          <View key={idx} style={styles.priceRow}>
            <Text style={styles.priceItem}>{row.item}</Text>
            <Text style={styles.pricePrice}>{formatPrice(row.price)}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Tiện ích</Text>
      <View style={styles.regulations}>
        {amenities.map((rule, idx) => (
          <Text key={idx} style={styles.regulationItem}>
            • {rule}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Qui định</Text>
      <View style={styles.regulations}>
        {regulations.map((rule, idx) => (
          <Text key={idx} style={styles.regulationItem}>
            • {rule}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    paddingBottom: VALUE_DEFAULT.PADDING_BOTTOM,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: "#333",
  },
  priceTable: {
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  priceItem: {
    fontSize: 16,
    color: "#444",
  },
  pricePrice: {
    fontSize: 16,
    color: "#444",
  },
  regulations: {
    marginTop: 8,
  },
  regulationItem: {
    fontSize: 15,
    color: "#555",
    marginBottom: 4,
  },
});
export default RestaurantInformation;
