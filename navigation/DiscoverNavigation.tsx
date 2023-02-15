import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { COLORS } from '../constants/Colors';
import { Navigation } from '../constants/Navigation';
import { Discover } from "../screen/Discover";

const Stack = createNativeStackNavigator();
const DiscoverNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }}
                name={Navigation.bottom.discover}
                component={Discover}
            />
        </Stack.Navigator>
    );
}

export default DiscoverNavigation;