import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { width, height } from "../../constants/DeviceSize";
import Post from "../HomeUser/Post";
import { getAllPost } from "../../utils/User/post/getAllPost";
import { useAuth } from "../../contexts/authContext";
import { getMyPost } from "../../utils/User/post/getMyPost";

const CategoryPost = (props) => {
  const auth = useAuth();
  const [allPost, setAllPost] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const response = await getAllPost(auth.user.token);

      if (response.code === 200) {
        const responseMe = await getMyPost(auth.user.token);
        if (responseMe.code === 200) {
          setAllPost([...response.data, ...responseMe.data]);
        }
      }
      setLoading(false);
    };
    getPost();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          {allPost
            .filter((item) => item.content.includes(props.contentSearch))
            .map((item, index) => {
              return <Post data={item} key={index} nameUser={item.user.name} avatar={item.user.images[0].image_path}/>;
            })}
        </View>
      )}
    </View>
  );
};

export default CategoryPost;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.02,
  },
});
