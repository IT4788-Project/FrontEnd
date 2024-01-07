import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../../constants/Color";
import PersonFollow from "../../../components/SeeAllFollow/PersonFollow";
import { useNavigation } from "@react-navigation/native";

const SeeAllFollow = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: COLORS.seeAllFollow.background,
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 15,
          marginVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {props.route.params.userName}
          </Text>
        </View>
      </View>
      <ScrollView>
        <Text
          style={styles.text}
        >{`Có ${props.route.params.follower.followers.length} người theo dõi `}</Text>

        <Text
          style={styles.text}
        >{`Đang theo dõi ${props.route.params.follower.followings.length} người`}</Text>
        {props.route.params.follower.followings.map((item, index) => {
          return <PersonFollow idPerson={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeeAllFollow;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.seeAllFollow.text,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
