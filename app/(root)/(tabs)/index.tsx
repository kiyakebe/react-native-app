import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl">Welcome!</Text>
      <Link href="/sign-in">Sing In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/properties/1">Property Detail</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
}
