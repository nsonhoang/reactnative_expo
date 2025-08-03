import CarouselDemo from "@/components/Carousel-Parallax/ParallaxCustom";
import RestaurantListRender from "@/components/restaurant-category/restaurant/RestaurantListRender";
import RestaurantCategoryRender from "@/components/restaurant-category/RestaurantCategory";
import { HEIGHT_TABS, VALUE_DEFAULT } from "@/constants/Values";
import React from "react";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

export interface CarouselItem {
  id: number;
  image: ImageSourcePropType; // string cho URL, number cho require()
}

// const data: CarouselItem[] = [
//   { id: 1, image: require("../../../assets/images/nhahang/nhahang1.jpg") },
//   { id: 2, image: require("../../../assets/images/nhahang/nhahang2.jpeg") },
//   { id: 3, image: require("../../../assets/images/nhahang/nhahang3.jpg") },
//   { id: 4, image: require("../../../assets/images/nhahang/nhahang4.jpg") },
// ];

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Đề xuất</Text>
        <CarouselDemo></CarouselDemo>
        <RestaurantCategoryRender />
        <View style={styles.listRestaurant}>
          <Text style={styles.title}> Danh Sách Nhà Hàng</Text>
          <Text style={styles.titleSeemore}>Xem thêm</Text>
        </View>
        <RestaurantListRender />
        <View style={styles.listRestaurant}>
          <Text style={styles.title}> Top Ưu đãi</Text>
          <Text style={styles.titleSeemore}>Xem thêm</Text>
        </View>
        <RestaurantListRender />
        <View style={styles.listRestaurant}>
          <Text style={styles.title}>Nhà hàng nổi tiếng cao cấp</Text>
          <Text style={styles.titleSeemore}>Xem thêm</Text>
        </View>
        <RestaurantListRender />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
    flex: 1,
    marginBottom: HEIGHT_TABS + 10,
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    fontWeight: "bold",
  },
  titleSeemore: {
    color: "red",
  },
  listRestaurant: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default Home;
