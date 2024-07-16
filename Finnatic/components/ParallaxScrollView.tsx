import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme, FlatList } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.FlatList<any>>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  const renderItem = () => (
    <ThemedView style={styles.content}>{children}</ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <Animated.FlatList
        ref={scrollRef}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <Animated.View
            style={[
              styles.header,
              headerAnimatedStyle,
            ]}
          >
            {headerImage}
          </Animated.View>
        }
        data={[{}]} // Dummy data to render children inside FlatList
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
