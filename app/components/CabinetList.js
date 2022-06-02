import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { getCabinets } from "../api";
import colors from "../config/colors";
import { Icon } from "react-native-elements"

export const CabinetList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCabinets({ setLoading, setData });
  }, []);

  return (
    <View style={{ width: "100%" }}>
      {isLoading ? (
        <ActivityIndicator color={colors.primary} size="large" />
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={data}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const renderItem = ({item}) => {
  return <Item title={item.cabinet} />;
};

const Item = ({ title }) => {
  return (
    <View style={styles.itemContainer}>
      <Icon name="school" style={styles.itemIcon}/>
      <Text>{title}</Text>
      <View style={{marginHorizontal: 24}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    borderWidth: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    paddingVertical: 12,
    justifyContent: "space-between"
  },
  itemIcon: {
    marginHorizontal: 12
  }
});

export default CabinetList