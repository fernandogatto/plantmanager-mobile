import React from 'react';

import { View } from 'react-native';

import {
    useTheme,
    IconButton,
} from 'react-native-paper';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadingCard = ({ count, type, direction, isLoading, hasError, onPressItem }) => {
    const { roundness } = useTheme();

    const renderLoadCard = () => {
        if(type === 'environment') {
            return (
                <SkeletonPlaceholder.Item
                    marginRight={30}
                    width={80}
                    height={50}
                    borderRadius={roundness}
                />
            )
        } else if(type === 'plants') {
            return (
                <SkeletonPlaceholder.Item
                    marginBottom={15}
                    marginHorizontal={15}
                    width="90%"
                    height={100}
                    borderRadius={roundness}
                />
            )
        }
    }
    
    return (
        <>
            {isLoading && direction === 'row' && (
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item
                        marginHorizontal={15}
                        flexDirection="row"
                        alignItems="center"
                    >
                        {[...Array(count)].map((e, i) => (
                            <View key={i}>
                                {renderLoadCard()}
                            </View>
                        ))}
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            )}

            {isLoading && direction === 'collumn' && (
                <SkeletonPlaceholder>
                    {[...Array(count)].map((e, i) => (
                        <View key={i}>
                            {renderLoadCard()}
                        </View>
                    ))}
                </SkeletonPlaceholder>
            )}
            
            {hasError && (
                <View style={{ alignItems: 'center' }}>
                    <IconButton
                        icon="replay"
                        size={24}
                        onPress={onPressItem}
                    />
                </View>
            )}
        </>
    )
}

export default LoadingCard;