import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Listings"
          component={ListingsScreen}
          options={() => ({
            presentation: "modal",
          })}
        />
        <Stack.Screen
          name="ListingDetails"
          component={ListingDetailScreen}
          options={() => ({
            presentation: "modal",
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
