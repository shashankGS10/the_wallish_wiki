import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface ProgressBarProps {
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();
  }, [duration, progress]);

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default ProgressBar;
