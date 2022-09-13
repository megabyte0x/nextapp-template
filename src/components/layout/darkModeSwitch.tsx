import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton } from "@chakra-ui/react";

//* Button to switch the theme between Dark and Light mode
const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = { light: "black", dark: "white" };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    />
  );
};

export default DarkModeSwitch;
