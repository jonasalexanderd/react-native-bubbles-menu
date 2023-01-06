import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import BubbleMenu from 'react-native-bubbles-menu';
import bubbleMenuStyle from '../../src/components/bubbleMenu/style';

export default function App() {
  const bubbleItems = [
    {
      content: (
        <View style={bubbleMenuStyle.content}>
          <Text style={style.textStyle}>yoga</Text>
        </View>
      ),
      defaultSize: 100,
      backgroundColor: '#fb2c73',
      uniqueKey: 'yoga',
    },
    {
      content: (
        <View style={bubbleMenuStyle.content}>
          <Text style={style.textStyle}>meditate</Text>
        </View>
      ),
      defaultSize: 150,
      backgroundColor: '#1376dd',
      uniqueKey: 'meditate',
    },
    {
      content: (
        <View style={bubbleMenuStyle.content}>
          <Text style={style.textStyle}>sleep</Text>
        </View>
      ),
      defaultSize: 200,
      backgroundColor: '#f26020',
      uniqueKey: 'sleep',
    },
    {
      content: (
        <View style={bubbleMenuStyle.content}>
          <Text style={style.textStyle}>calm</Text>
        </View>
      ),
      defaultSize: 135,
      backgroundColor: '#902ae6',
      uniqueKey: 'calm',
    },
    {
      content: (
        <View style={bubbleMenuStyle.content}>
          <Text style={style.textStyle}>focus</Text>
        </View>
      ),
      defaultSize: 80,
      backgroundColor: '#f29104',
      uniqueKey: 'focus',
    },
  ];
  return (
    <View style={style.container}>
      <BubbleMenu items={bubbleItems} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  textStyle: {
    textTransform: 'lowercase',
    color: '#ffffff',
  },
});
