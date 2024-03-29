import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreatePublication, Home, Settings } from "../screens";

const Stack = createNativeStackNavigator()

function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="CreatePublication" component={CreatePublication} options={{
                animation: 'slide_from_right',
                headerShown: false,
            }}/>
            <Stack.Screen name="Settings" component={Settings} options={{
                animation: 'slide_from_right',
            }}/>
        </Stack.Navigator>
    )
}

export default HomeNavigator