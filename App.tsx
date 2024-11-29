import { Text } from "react-native";

import { Center } from "./components/ui/center";
import { Divider } from "./components/ui/divider";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";

// App.tsx
export default function App() {
  return (
    <GluestackUIProvider>
      <Center>
        <Text className="font-semibold">Easy</Text>
        <Divider className="my-0.5" />
        <Text className="font-semibold">Difficult</Text>
      </Center>
    </GluestackUIProvider>
  );
}
