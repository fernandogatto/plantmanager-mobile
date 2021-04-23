import React from 'react';

import {
    DrawerItemContainer,
    TitleContainer,
    TitleText,
} from './styles';

const DrawerItem = ({ item, selected, onPressItem }) => {
    return (
        <DrawerItemContainer
            onPress={() => onPressItem(item.routerName)}
            hitSlop={{
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            }}
        >
            <TitleContainer>
                <TitleText selected={selected}>
                    {item.title}
                </TitleText>
            </TitleContainer>
        </DrawerItemContainer>
    )
}

export default DrawerItem;