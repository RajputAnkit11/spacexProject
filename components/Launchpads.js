import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Field from "./Field";
import FieldLaunch from "./FieldLaunch";

const Launchpads = ({ data }) => {
  const item = data;
  const n = item.launches.length;

  return (
    <View style={styles.box}>
      <View style={styles.details}>
        <Field fieldName="Name" fieldValue={data.name} />
        <Field fieldName="Status" fieldValue={data.status} />
        <Field fieldName="Full Name" fieldValue={data.full_name} />
        <Field fieldName="Region" fieldValue={data.region} />
        <Field fieldName="Launch Attempts" fieldValue={data.launch_attempts} />
        <Field
          fieldName="Launch Successes"
          fieldValue={data.launch_successes}
        />
      </View>

      <View style={styles.launches}>
        <Text style={styles.txt}> Launches : -</Text>
        {data.launches
          .filter((item, idx) => idx < 3)
          .map((item) => {
            return <FieldLaunch fieldValue={item} />;
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#010312",
    padding: 10,
  },
  launches: {
    backgroundColor: "#fff",
    padding: 4,
    borderWidth: 1,
  },
  txt: {
    fontSize: 18,
  },
});

export default Launchpads;
