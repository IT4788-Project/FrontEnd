import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import COLORS from "../../constants/Color";
import { width, height } from "../../constants/DeviceSize";
import { useNavigation } from "@react-navigation/native";
import { findUserById } from "../../utils/User/userInfor/findUserById";
import { useAuth } from "../../contexts/authContext";

const PersonFollow = (props) => {
  const auth = useAuth();
  const navigation = useNavigation();
  const [userInfor, setUserInfor] = React.useState(null);

  useEffect(() => {
    const getDataUser = async () => {
      const response = await findUserById(
        { userId: props.idPerson },
        auth.user.token
      );
      if (response.code === 200) {
        setUserInfor(response.data);
      }
    };
    getDataUser();
  }, []);
  console.log(userInfor)

  return (
    <View>
      {userInfor !== null ? (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            navigation.navigate("PersonalPageById", {
              data: userInfor,
              prevScreen: "SeeAllFollow",
            })
          }
        >
          <View>
            <Image
              source={{ uri: userInfor.user.images[0].image_path }}
              style={{
                width: width * 0.2,
                height: width * 0.2,
                borderRadius: 100,
                borderColor: COLORS.white,
              }}
            />
          </View>
          <Text style={styles.text}>{userInfor.user.name}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default PersonFollow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.seeAllFollow.personFollow.text,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
