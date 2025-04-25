import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const ActivityItem = () => {
  const [data, setData] = useState([
    { id: "1", activity: "Reading", time: "10:00 AM", pinned: false },
    { id: "2", activity: "Coding", time: "2:30 PM", pinned: false },
    { id: "11", activity: "Reading", time: "10:00 AM", pinned: false },
    { id: "12", activity: "Coding", time: "2:30 PM", pinned: false },
    { id: "21", activity: "Reading", time: "10:00 AM", pinned: false },
    { id: "22", activity: "Coding", time: "2:30 PM", pinned: false },
    { id: "13", activity: "Reading", time: "10:00 AM", pinned: false },
    { id: "32", activity: "Coding", time: "2:30 PM", pinned: false },
  ]);

  const togglePinned = (id) => {
    setData((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.activityContainer, item.pinned && styles.pinnedItem]}
        onPress={() => togglePinned(item.id)}
      >
        <View style={styles.activity}>
          <Text>{`${item.activity} at ${item.time}`}</Text>
          <Text>{item.pinned ? "Pinned" : "Not Pinned"}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const pinnedItems = data.filter((item) => item.pinned);
  const restItems = data.filter((item) => !item.pinned);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pinned Items</Text>
      <FlatList
        data={pinnedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.heading}>All Activities</Text>
      <FlatList
        data={restItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  activityContainer: {
    marginVertical: 5,
  },
  activity: {
    padding: 10,
    backgroundColor: "lightgreen",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pinnedItem: {
    backgroundColor: "lightgreen",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ActivityItem;
