import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Launch from "../components/Launch";

const LaunchStack = ({ navigation }) => {
  const route = useRoute();
  const id = route.params.id;

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const res = await fetch("https://api.spacexdata.com/v4/launches/" + id);
      const d = await res.json();
      setData(d);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ScrollView>
        <Launch data={data} />
      </ScrollView>
    </>
  );
};

export default LaunchStack;
