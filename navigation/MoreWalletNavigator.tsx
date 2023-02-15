import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Navigation } from '../constants/Navigation';
import { MoreWallet } from "../screen/MoreWallet";

const Stack = createNativeStackNavigator();
const MoreWalletNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }}
                name={Navigation.bottom.moreWaller}
                component={MoreWallet}
            />
        </Stack.Navigator>
    );
}

export default MoreWalletNavigator;