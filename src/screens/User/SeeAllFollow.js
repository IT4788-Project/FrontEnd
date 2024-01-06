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
            Nguyễn Việt Anh
          </Text>
        </View>
      </View>

      <Text style={styles.text}>30 người theo dõi</Text>

      <PersonFollow />
      <PersonFollow />
      <PersonFollow />
      <PersonFollow />
      <PersonFollow />
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
