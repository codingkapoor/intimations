import React from 'react';

import { Linking, FlatList } from 'react-native';
import { Header, Resource } from '../StyledComponents';

const Section = ({ headerTitle, data }) => {
    return (
        <>
            <Header>{headerTitle}</Header>
            <FlatList
                data={data}
                style={{ marginBottom: 20 }}
                renderItem={({ item }) =>
                    <Resource onPress={() => Linking.openURL(`${item.url}`)}>
                        {item.title}
                    </Resource>
                }
                flexGrow={0}
                keyExtractor={item => item.title}
            />
        </>
    );
};

export default Section;
