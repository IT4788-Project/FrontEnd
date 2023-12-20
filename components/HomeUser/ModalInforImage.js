import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {width, height} from '../../constants/DeviceSize';

const ModalInforImage = props => {
  const isVisible = props.isVisible;
  const linkImage = props.linkImage;

  return (
    <Modal visible={isVisible} animationType="slide">
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => props.setIsVisible (false)}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>{props.title}</Text>
        </View>
      </View>

      <Image
        source={{uri: linkImage}}
        style={{
          height: height * 0.8,
          width: width,
          resizeMode: 'contain',
        }}
      />

    </Modal>
  );
};

export default ModalInforImage;

const styles = StyleSheet.create ({});
