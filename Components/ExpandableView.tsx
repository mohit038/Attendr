import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Animated } from "react-native";

interface ExpandableViewProps {
  isExpanded: boolean;
  children: React.ReactNode;
  componentHeight: number;
}

const ExpandableView: React.FC<ExpandableViewProps> = ({
  children,
  isExpanded,
  componentHeight,
}) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, componentHeight],
  });

  return (
    <View>
      <Animated.View style={{ overflow: "hidden", height }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default ExpandableView;
