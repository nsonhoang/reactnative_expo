import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { useLocalSearchParams } from "expo-router";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import HeaderRestaurantDetails from "@/components/restaurant-category/restaurant/restaurantDetails/Header";
import LeftAlignCarousel from "@/components/restaurant-category/restaurant/restaurantDetails/LeftAlignCarousel";
import RestaurantInformation from "@/components/restaurant-category/restaurant/restaurantDetails/RestaurantDetails";
import { VALUE_DEFAULT } from "@/constants/Values";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  useLocalSearchParams,
  useNavigation,
  useRouter,
  useSegments,
} from "expo-router";
import { CarouselItem } from "..";

export interface RestaurantDetailsProps {
  summary: string;
  priceTable: PriceItem[];
  regulations: string[];
  amenities: string[];
  image: CarouselItem[];
}
export type PriceItem = {
  item: string;
  price: number;
};

const demoData: RestaurantDetailsProps = {
  summary:
    "Nhà hàng phục vụ các món ăn truyền thống Việt Nam với không gian ấm cúng, đội ngũ nhân viên thân thiện và dịch vụ chuyên nghiệp. Thực đơn đa dạng phù hợp cho cả gia đình, nhóm bạn và các buổi gặp mặt công việc.",
  priceTable: [
    { item: "Phở bò", price: 50000 },
    { item: "Bún chả", price: 45000 },
    { item: "Cà phê", price: 25000 },
    { item: "Bánh mì", price: 20000 },
    { item: "Nước ép trái cây", price: 30000 },
    { item: "Trà đá", price: 10000 },
  ],
  regulations: [
    "Không hút thuốc trong nhà hàng",
    "Không mang đồ ăn ngoài vào",
    "Giữ gìn vệ sinh chung",
    "Thanh toán trước khi rời khỏi nhà hàng",
    "Không gây ồn ào ảnh hưởng đến người khác",
    "Trẻ em phải có người lớn đi kèm",
    "Không hút thuốc trong nhà hàng",
    "Không mang đồ ăn ngoài vào",
    "Giữ gìn vệ sinh chung",
    "Thanh toán trước khi rời khỏi nhà hàng",
    "Không gây ồn ào ảnh hưởng đến người khác",
    "Trẻ em phải có người lớn đi kèm",
  ],
  amenities: [
    "Wifi miễn phí",
    "Chỗ đậu xe rộng rãi",
    "Phòng riêng cho nhóm",
    "Điều hòa không khí",
    "Thanh toán bằng thẻ",
    "Khu vui chơi trẻ em",
  ],
  image: [
    {
      id: 1,
      image: require("../../../../../assets/images/nhahang/nhahang1.jpg"),
    },
    {
      id: 2,
      image: require("../../../../../assets/images/nhahang/nhahang2.jpeg"),
    },
    {
      id: 3,
      image: require("../../../../../assets/images/nhahang/nhahang3.jpg"),
    },
    {
      id: 4,
      image: require("../../../../../assets/images/nhahang/nhahang4.jpg"),
    },
  ],
};

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  const segments = useSegments();

  console.log("Tên màn hình:", segments);
  const scrollY = useSharedValue(0);

  //ẩn thanh tbaBottom

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  const handlerBtnBooking = () => {
    const bookingId = Array.isArray(id) ? id[0] : id;
    router.push({
      pathname: "./bookingRestaurant/[id]",
      params: { id: bookingId },
      //name sẽ đc lấy sa khi call api
    });
  };

  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [200, 130], // Mở rộng dải đầu vào
      [70, 0],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollY.value,
      [0, 100, 150], // Mở rộng dải đầu vào
      [0, 0.5, 1],
      Extrapolate.CLAMP
    );

    return {
      height,
      opacity,
    };
  });
  const btnBookingBottomStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [400, 500],
      [0, 1],
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });

  return (
    <View style={styles.container}>
      <HeaderRestaurantDetails style={[headerStyle]} />
      <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler}>
        <LeftAlignCarousel list={demoData.image} />
        <View style={styles.detailContainer}>
          <Text style={styles.nameRestaurant}>Bún Phở Bà Triệu</Text>
          <View style={styles.informationContainer}>
            <View style={styles.information}>
              <MaterialIcons
                name="location-pin"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text>Quận 5, thành phố Hồ chí Minh</Text>
            </View>
            <View style={styles.information}>
              <FontAwesome
                name="hand-grab-o"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text>Chuyên bán các loại bún phở</Text>
            </View>
            <View style={styles.information}>
              <MaterialIcons
                name="attach-money"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text>25.000 - 75.000đ/tô</Text>
            </View>
            <View style={styles.borderWidth}></View>
          </View>
          <View style={[styles.statusContainer, styles.borderWidth]}>
            <MaterialIcons
              name="schedule"
              size={20}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.timeOpen}>6:00 - 19:00</Text>
          </View>

          <View style={[styles.bookingBtnContainer, styles.borderWidth]}>
            <View style={styles.titleBtnContainer}>
              <MaterialIcons
                name="calendar-today"
                size={20}
                style={{ marginRight: 5 }}
              />
              <Text>Đặt chỗ (Để có chỗ trước khi đến)</Text>
            </View>
            <View style={styles.bookingDetailContainer}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.timeStyle}>
                  <MaterialIcons name="person" size={20}></MaterialIcons>
                  <Text>2</Text>
                </View>
                <Text style={styles.timeStyle}>10:00</Text>
                <Text style={styles.timeStyle}>
                  {new Date().toLocaleDateString("vi-VN")}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.btnBooking}
                onPress={handlerBtnBooking}
              >
                <Text style={styles.btnText}>Đặt Chỗ ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* components information detail restaurant */}
          <RestaurantInformation
            summary={demoData.summary}
            amenities={demoData.amenities}
            priceTable={demoData.priceTable}
            regulations={demoData.regulations}
          />
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[styles.btnBookingBottomContainer, btnBookingBottomStyle]}
      >
        <TouchableOpacity
          style={styles.btnBookingBottom}
          onPress={handlerBtnBooking}
        >
          <Text style={styles.btnText}>Đặt Chỗ ngay</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
  },
  detailContainer: {
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
    width: "100%",
    marginTop: 10,
  },
  nameRestaurant: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
  },
  informationContainer: {},
  information: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  borderWidth: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 3,
    paddingHorizontal: -VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  statusContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  timeOpen: {
    fontWeight: "bold",
  },
  bookingBtnContainer: {
    height: 100,
    marginTop: 10,
  },
  titleBtnContainer: {
    flexDirection: "row",
  },
  bookingDetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "70%",
    justifyContent: "space-between",
  },
  timeStyle: {
    padding: 10,
    flexDirection: "row",
  },
  btnBooking: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
  },
  btnText: {},
  btnBookingBottomContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    padding: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  btnBookingBottom: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 99,
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    flex: 1,
  },
});
