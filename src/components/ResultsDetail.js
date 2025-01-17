import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResultsDetail = ({ result, lastOfUs }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("ResultsShow", { id: result.id})}>
      <View style={[styles.container, lastOfUs && {marginRight: 15}]}>
        <Image source={{ uri: result.image_url }} style={styles.image} />
        <Text styles={styles.name}>{result.name}</Text>
        <Text style={styles.rating}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    borderRadius: 10,
    height: 120
  },
  name: {
    fontWeight: "bold"
  },
  rating: {
    color: "gray"
  }
});

export default ResultsDetail;
