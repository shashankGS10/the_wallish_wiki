import React, { useEffect, useRef, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Story } from '../types/story';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface StoryComponentProps {
    story: Story;
    onNext: () => void;
    onPrevious: () => void;
    onExit: () => void;
}

const StoryComponent: React.FC<StoryComponentProps> = ({ story, onNext, onPrevious, onExit }) => {
    const navigation = useNavigation();
    const progress = useRef(new Animated.Value(0)).current;
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleNext = useCallback(() => {
        onNext();
    }, [onNext]);

    const handlePrevious = useCallback(() => {
        onPrevious();
    }, [onPrevious]);

    useEffect(() => {
        progress.setValue(0);

        const animation = Animated.timing(progress, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false,
        });

        animation.start();

        timerRef.current = setTimeout(() => {
            handleNext();
        }, 5000);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            animation.stop();
        };
    }, [story, handleNext, handlePrevious]);

    useEffect(() => {
        const handleExit = () => {
            navigation.navigate('Home');
        };

        return handleExit;
    }, [navigation]);

    const progressWidth = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.container}>
            <Image source={{ uri: story.image }} style={styles.image} />
            <View style={styles.header}>
                <View style={styles.progressContainer}>
                    <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
                </View>
                <View style={styles.headerContent}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={onExit} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={styles.userInfo}>
                            <Image source={{ uri: story.avatar }} style={styles.avatar} />
                            <Text style={styles.username}>{story.username}</Text>
                            <Text style={styles.timestamp}>{story.timestamp}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={onExit} style={styles.closeButton}>
                        <Ionicons name="close" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.leftSide} onPress={handlePrevious} />
            <TouchableOpacity style={styles.rightSide} onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    header: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 16,
        zIndex: 1,
    },
    progressContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
        height: 4,
        width: "95%",
        overflow: 'hidden',
        marginBottom: 16,
    },
    progressBar: {
        height: 4,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 8,
    },
    closeButton: {
        padding: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    username: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 8,
    },
    timestamp: {
        color: 'white',
    },
    leftSide: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '50%',
    },
    rightSide: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '50%',
    },
    headerContent: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
    },
});

export default StoryComponent;