import Button from "@/components/button/Button";
import { VALUE_DEFAULT } from "@/constants/Values";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { forwardRef, useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Easing } from "react-native-reanimated";

// Định nghĩa kiểu props cho component
type BottomSheetComponentProps = {
  onConfirm: (statusId: string | null) => void;
  // Có thể thêm các props khác nếu cần
};

const BottomSheetStatus = forwardRef<
  BottomSheetMethods,
  BottomSheetComponentProps
>((props, ref) => {
  // Danh sách các trạng thái
  const [items] = useState([
    { id: 1, name: "Tất cả" },
    { id: 2, name: "Chờ xác nhận" },
    { id: 3, name: "Đã tiếp nhận" },
    { id: 4, name: "Hoàn thành" },
    { id: 5, name: "Đã hủy" },
  ]);

  // State lưu id của item được chọn
  const [selectedId, setSelectedId] = useState<string | null>("Tất cả");

  // Component hiển thị mỗi item trạng thái
  const StatusItem = ({
    item,
    onPress,
    isSelected,
  }: {
    item: { id: number; name: string };
    onPress: () => void;
    isSelected: boolean;
  }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.statusContainer,
            isSelected && styles.selectedStatusContainer, // Áp dụng style khi được chọn
          ]}
        >
          <Text style={[styles.statusText]}>
            {item.name} {/* Hiển thị tên trạng thái */}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const handleConfirm = () => {
    props.onConfirm(selectedId); // Gọi callback khi xác nhận

    if (ref && "current" in ref) {
      ref.current?.close();
    } // Đóng bottom sheet sau khi xác nhận
  };

  // Callback khi sheet thay đổi trạng thái (mở/đóng)
  const handleSheetChanges = useCallback((index: number) => {
    console.log("Sheet position changed:", index);
  }, []);

  // Điểm snap của bottom sheet (50% chiều cao màn hình)
  const snapPoints = useMemo(() => ["50%"], []);

  // Render backdrop (nền mờ phía sau bottom sheet)
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        style={[props.style, styles.backdrop]}
        opacity={0.7}
      />
    ),
    []
  );

  return (
    <BottomSheet
      style={styles.bottomSheetWrapper}
      ref={ref}
      onChange={handleSheetChanges}
      index={-1} // Mặc định đóng
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true} // Cho phép đóng bằng cách kéo xuống
      enableDynamicSizing={false}
      backgroundStyle={{
        backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR, // Màu nền của sheet
      }}
      animationConfigs={{
        duration: 700, // Thời gian animation
        easing: Easing.out(Easing.poly(5)), // Hiệu ứng easing
      }}
      detached={true} // Tách biệt khỏi layout chính
    >
      <BottomSheetView style={styles.container}>
        {/* Tiêu đề */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chọn trạng thái</Text>
        </View>

        {/* Danh sách trạng thái */}
        <View style={styles.contentContainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <StatusItem
                item={item}
                onPress={() => {
                  setSelectedId(item.name); // Cập nhật trạng thái được chọn
                }}
                isSelected={selectedId === item.name} // Kiểm tra có đang được chọn không
              />
            )}
          />
        </View>

        {/* Nút xác nhận */}
        <View style={styles.buttonContainer}>
          <Button onPress={handleConfirm} text="Xác nhận" />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});

BottomSheetStatus.displayName = "BottomSheetStatus";

const styles = StyleSheet.create({
  bottomSheetWrapper: {
    position: "absolute",
    zIndex: 999,
    width: "100%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
  },
  titleContainer: {
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
    fontWeight: "500",
    color: "white",
  },
  contentContainer: {
    flexDirection: "column",
    flex: 1, // Chiếm hết không gian còn lại
  },
  statusContainer: {
    paddingVertical: 12, // Sử dụng giá trị cụ thể thay vì %
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  selectedStatusContainer: {
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR, // Màu với opacity 20%
    borderBottomColor: VALUE_DEFAULT.PRIMARY_COLOR,
  },
  statusText: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
    color: "#333",
  },
  selectedStatusText: {
    color: VALUE_DEFAULT.PRIMARY_COLOR,
    fontWeight: "bold",
  },
  buttonContainer: {
    padding: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
});

export default BottomSheetStatus;
