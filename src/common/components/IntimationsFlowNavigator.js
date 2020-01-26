import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NavigationEvents } from 'react-navigation';

import FeedContainer from '../../screens/feed/FeedContainer';
import EditContainer from '../../screens/edit/EditContainer';
import { updatePushNotificationSeen } from '../../store/push-notification-seen/actions';

const IntimationsFlow = createStackNavigator({
    Feed: FeedContainer,
    Edit: EditContainer
});

class IntimationsFlowNavigator extends Component {

    static router = IntimationsFlow.router;

    static navigationOptions = ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0)
            tabBarVisible = false;

        return {
            title: '',
            tabBarIcon: ({ focused }) => {
                let i;
                if (!navigation.state.params || navigation.state.params.pushNotificationSeen) {
                    if (focused)
                        i = <FontAwesomeIcon icon={'bell'} size={29} color={'#3780BE'} />;
                    else
                        i = <FontAwesomeIcon icon={'bell'} size={29} color={'#393939'} />;
                } else {
                    if (focused)
                        i = <FontAwesomeIcon icon={'bell'} size={29} color={'#3780BE'} />;
                    else
                        i = <>
                            <FontAwesomeIcon icon={'bell'} size={29} color={'#393939'} />
                            <Badge status="error" badgeStyle={{ position: 'absolute', top: -26, right: -13 }} />
                        </>;
                }

                return i;
            },
            tabBarVisible
        };
    };

    componentDidUpdate(prevProps) {
        const { navigation, pushNotificationSeen } = this.props;
        if (pushNotificationSeen !== prevProps.pushNotificationSeen)
            navigation.setParams({ pushNotificationSeen });
    }

    render() {
        const { navigation } = this.props;
        return <>
            <NavigationEvents
                onDidFocus={() => { if (!this.props.pushNotificationSeen) updatePushNotificationSeen(true) }}
                onDidBlur={() => { if (!this.props.pushNotificationSeen) updatePushNotificationSeen(true) }}
            />
            <IntimationsFlow navigation={navigation} />
        </>;
    }
}

const mapStateToProps = ({ pushNotificationSeen }) => {
    return { pushNotificationSeen };
};

export default connect(mapStateToProps, null)(IntimationsFlowNavigator);
