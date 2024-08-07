import { ReactNode } from "react";
import { GlobalSheet } from "../GlobalSheet";
import { Button, Typography } from "../atoms";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type TMode = "logo" | "menu" | "profile";

export const LogoBarUI = () => {
  return <Image source={require("../../../assets/logo.png")} />;
};

export const MenuBarUI = ({
  module,
  withCog,
}: {
  module: string;
  withCog?: boolean;
}) => {
  return (
    <View style={provisionalSheet.menuBarContainer}>
      <View style={provisionalSheet.menuBarLeftSide}>
        <Button dense variant="text" icon="back" />
        <Typography size="h5" text={module ?? ""} />
      </View>
      {withCog && <Button dense variant="text" icon="cog" />}
    </View>
  );
};

export const ProfileBarUI = () => {
  const chestImg = require("../../../assets/subtract.png");
  const profileDefault = require("../../../assets/profile_default.png");
  return (
    <View style={provisionalSheet.profileBarContainer}>
      <Image style={provisionalSheet.chestImage} source={chestImg} />
      <View style={provisionalSheet.profileText}>
        <Typography align="right" text="JOSEFINA" size="h5" />
        <Typography
          align="right"
          text="Me gustan los chihuahuas y disfruto de comer torillas."
          size="sm"
        />
      </View>
      <Image style={provisionalSheet.profileImage} source={profileDefault} />
    </View>
  );
};

export const MODE_OBJECT = {
  logo: LogoBarUI,
  menu: MenuBarUI,
  profile: ProfileBarUI,
};

export const ContainerUI = ({
  children,
  mode,
  module,
  withCog,
}: {
  mode?: TMode;
  module?: string;
  withCog?: boolean;
  children: ReactNode;
}) => {
  const ModeComponent = MODE_OBJECT[mode as TMode];

  return (
    <SafeAreaView style={GlobalSheet.container}>
      {mode && (
        <View style={GlobalSheet.headerContainer}>
          <ModeComponent module={module ?? ""} withCog={withCog} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
};

const provisionalSheet = StyleSheet.create({
  menuBarContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuBarLeftSide: {
    flexDirection: "row",
    alignItems: "center",
  },

  // PROFILE BAR
  profileBarContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  chestImage: {
    width: 50,
    height: 50,
    // marginRight: 10,
    resizeMode: "contain",
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  profileText: {
    flex: 1,
    paddingLeft: 5,
    // marginRight: 5,
    // paddingRight: 5,
    flexWrap: "wrap",
  },
});
