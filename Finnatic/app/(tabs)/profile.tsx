import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, Platform, View, FlatList } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Profile() {

  return (
    <ThemedView style={styles.container}>
      <View>
        <ThemedText>This would be our profile page</ThemedText>
        <ThemedView style={{backgroundColor:'yellow'}}>
            <Text>This area would be my Face with name and bio</Text>
        </ThemedView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C14DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
