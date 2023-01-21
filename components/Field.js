import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Field = (props) => {
  return (
    <View style={styles.title}>
      <Text style={styles.txt}>
        {props.fieldName} : {props.fieldValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#fff",
    padding: 4,
  },
  txt: {
    fontSize: 18,
  },
});
export default Field;
