import React from 'react';
import BubbleMenuComponent, {
  BubbleMenuPropsInterface,
} from './components/bubbleMenu';

const BubbleMenu = (props: BubbleMenuPropsInterface) => {
  return <BubbleMenuComponent items={props.items} />;
};

export default BubbleMenu;

BubbleMenu.defaultProps = {
  items: [],
};
