import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { COLORS } from '../constants/Colors';
import { Navigation } from '../constants/Navigation';
import { Discover } from "../screen/Discover";
import { Portal } from "../screen/Portal";

const Stack = createNativeStackNavigator();
const PortalNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }}
                name={Navigation.bottom.portal}
                component={Portal}
            />
        </Stack.Navigator>
    );
}

export default PortalNavigation;