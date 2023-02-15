import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Navigation } from '../constants/Navigation';
import OfferDetail from "../screen/OfferDetail/OfferDetail";
import MainPageNavigator from "./MainPageNavigator";

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }}
                name={Navigation.navigator.rootNavigator}
                component={MainPageNavigator}
            />
            <Stack.Screen options={{
                headerShown: false
            }}
                name={Navigation.stack.offerDetail}
                component={OfferDetail}
            />
        </Stack.Navigator>
    );
}

export default RootNavigation;