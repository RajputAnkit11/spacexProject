import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import Launchpads from "../components/Launchpads";

const LaunchPadStack = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const res = await fetch("https://api.spacexdata.com/v4/launchpads");
      const d = await res.json();
      setData(d);
      // console.log(d[0].name);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ScrollView>
        <View>
          {data.map((item) => {
            return <Launchpads data={item} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default LaunchPadStack;
