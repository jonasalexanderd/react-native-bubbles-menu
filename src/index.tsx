import React from 'react';
import BubbleMenuComponent, {
  BubbleMenuPropsInterface,
} from './components/bubbleMenu';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

const BubbleMenu = (props: BubbleMenuPropsInterface) => {
  return <BubbleMenuComponent items={props.items} />;
};

export default BubbleMenu;

BubbleMenu.defaultProps = {
  items: [],
};
