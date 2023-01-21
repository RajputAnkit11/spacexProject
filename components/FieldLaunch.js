import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FieldLaunch = (props) => {
  const navigation = useNavigation();
  const onpress = () => {
    navigation.navigate("SpaceX Launch", { id: props.fieldValue });
  };
  return (
    <View style={styles.box}>
      <Text style={styles.content}>Launch : {props.fieldValue}</Text>

      {/* <Button
        style={styles.button}
        title="info"
        // onPress={() => {
        //   navigation.navigate("Launch", { id: props.fieldValue });
        // }}
        onPress={onpress}
      /> */}

      <Pressable style={styles.button} onPress={onpress}>
        <Text style={styles.text}>Info</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 4,
  },
  content: {
    marginTop: 12,
    fontSize: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default FieldLaunch;
