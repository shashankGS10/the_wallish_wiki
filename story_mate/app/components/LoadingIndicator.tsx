import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const LoadingIndicator: React.FC = () => {
  const spinAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinAnimation]);

  const spin = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]}>
       <View style={styles.gradientBorder}  testID="loading-indicator" >          
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    position: 'relative',
    overflow: 'hidden',
  },
  gradientBorder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 37.5,
    borderWidth: 4,
    borderColor: 'black',
    borderStyle: 'dashed',
  },
});

export default LoadingIndicator;