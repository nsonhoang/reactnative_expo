import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";
import { PRIMARY_COLOR } from "@/constants/Colors";
import { VALUE_DEFAULT } from "@/constants/Values";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Alert,
} from "react-native";

const mockData = [
  "Apple",
  "Banana",
  "Orange",
  "Grape",
  "Pineapple",
  "Mango",
  "Strawberry",
  "Blueberry",
];

const Search: React.FC = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const filteredData = mockData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  const handleSearch = () => {
    if (query !== "") {
      router.push({
        pathname: "/search/[id]",
        params: { id: query },
      });
    } else {
      Alert.alert("bạn chưa nhận nội dung tìm kiếm");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ButtonIconCustom
          iconName="arrow-back"
          onPress={() => {
            router.back();
          }}
          size={VALUE_DEFAULT.SIZE_ICON}
          style={styles.backButton}
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={query}
          onChangeText={setQuery}
          placeholderTextColor={PRIMARY_COLOR}
          onSubmitEditing={handleSearch}
        />
        <ButtonIconCustom
          iconName="search"
          onPress={handleSearch}
          style={styles.searchButton}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        ListEmptyComponent={<Text style={styles.empty}>No results found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: VALUE_DEFAULT.PRIMARY_COLOR,
  },
  backButton: {
    marginRight: 8,
    padding: 8,
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    borderRadius: 50,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: VALUE_DEFAULT.PRIMARY_COLOR,
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 12,
  },
  searchButton: {
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    padding: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  item: {
    padding: 12,
    fontSize: 16,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
});

export default Search;
