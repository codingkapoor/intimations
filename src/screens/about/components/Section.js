import React from 'react';
import { Linking, Text} from 'react-native';
import { Header } from '../StyledComponents';
import { FlatList } from 'react-native-gesture-handler';

const Section = ({ headerTitle, data }) => {
    return (
        <>
            <Header>{headerTitle}</Header>
            <FlatList
                data={data}
                style={{ marginBottom: 15 }}
                renderItem={({ item }) =>
                    <Text style={{ color: 'blue', paddingLeft: 10, fontSize: 18, marginBottom: 5 }}
                        onPress={() => Linking.openURL(`${item.url}`)}>
                        {item.title}
                    </Text>
                }
                flexGrow={0}
                keyExtractor={item => item.title}
            />
        </>
    );
};

export default Section;
