import React, { createContext, useState } from "react";
import { generateDarkTheme, generateLightTheme } from "../Themes/themeProvider";

const defaultMode = "light";
const defaultTheme =
  defaultMode === "dark" ? generateDarkTheme : generateLightTheme;

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode) => console.log("themecontext mode changed  useT====" + mode),
  currentTheme: defaultTheme,
});

export const useTheme = () => React.useContext(ThemeContext);
// export const ThemeProvider = React.createContext(initialState);
const ManageThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(defaultMode);
  const [themeColors, setThemeColors] = useState(defaultTheme);
  const setMode = (mode) => {
    setThemeState(mode);
    setThemeColors(mode === "dark" ? generateDarkTheme : generateLightTheme);
  };
  // useEffect(() => {
  //   const subscription = Appearance?.addChangeListener(({ colorScheme }) => {
  //     setThemeState(colorScheme);
  //     // setThemeColors(mode === "dark" ? generateDarkTheme : generateLightTheme);
  //   });
  //   return () => subscription.remove();
  // }, []);
  return (
    <ThemeContext.Provider
      value={{
        mode: themeState,
        currentTheme: themeColors,
        setMode: setMode,
      }}
    >
      {/* <PaperProvider
        theme={themeState === "dark" ? generateDarkTheme : generateLightTheme}
      > */}
      {/* <NavigationContainer> */}
      {children}
      {/* </NavigationContainer> */}
      {/* </PaperProvider> */}
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({ children }) => (
  // <AppearanceProvider>
  <ManageThemeProvider>{children}</ManageThemeProvider>
  // </AppearanceProvider>
);

export default ThemeManager;

// const useTheme = ({ userInfo }) => {
//   const [theme, setTheme] = useState(null);

//   useEffect(() => {
//     if (userInfo)
//       switch (userInfo.user_theme) {
//         case "dark":
//           setTheme(generateDarkTheme());
//           break;
//         case "light":
//           setTheme(generateLightTheme());
//           break;
//         default:
//           setTheme(generateLightTheme());
//           break;
//       }
//     else {
//       setTheme(generateLightTheme());
//     }
//   }, []);

//   return theme;
// };

// export default useTheme;
