import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {width, height} from '../../constants/DeviceSize';
import COLORS from '../../constants/Color';
import {AntDesign} from '@expo/vector-icons';

const ShortDishRecipe = props => {
  const colorLike = props.like === 'on'
    ? COLORS.cookingRecipe.likeOn
    : COLORS.cookingRecipe.likeOff;

  const tags = [
    'Tag1',
    'Tag2',
    'Tag3',
    'Tag4',
    'Tag5',
    'Tag6',
    'Tag7',
    'Tag8',
    'Tag9',
    'Tag10',
  ];

  const renderTags = () => {
    const rows = [];
    const itemsPerRow = 4;

    for (let i = 0; i < tags.length; i += itemsPerRow) {
      const rowTags = tags.slice (i, i + itemsPerRow);
      const row = (
        <View key={i / itemsPerRow} style={styles.row}>
          {rowTags.map ((tag, index) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      rows.push (row);
    }

    return rows;
  };

  return (
    <View style={{marginBottom: 30}}>
      <Image source={props.linkImage} style={styles.imageDishRecipe} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <Text style={styles.textDishRecipe}>
            {props.nameDish}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.like, {backgroundColor: colorLike.background}]}>
          <AntDesign name="like1" size={20} color={colorLike.icon} />
        </TouchableOpacity>
      </View>

      {renderTags ()}
    </View>
  );
};

export default ShortDishRecipe;

const styles = StyleSheet.create ({
  imageDishRecipe: {
    width: '100%',
    height: height / 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  textDishRecipe: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: COLORS.cookingRecipe.tag,
    borderRadius: 20,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  like: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
