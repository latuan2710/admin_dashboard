import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AsideBar from "./AsideBar";
import Header from "./Header";

export default function Layout() {
  const [theme, setTheme] = useState<string>("light");
  const [themeDirection, setThemeDirection] = useState("ltr");
  const [themeColor, setThemeColor] = useState("Blue_Theme");
  const [layoutType, setLayoutType] = useState("vertical");
  const [containerOption, setContainerOption] = useState("boxed");
  const [sidebarType, setSidebarType] = useState("full");
  const [cardWith, setCardWith] = useState("shadow");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeDirection,
        setThemeDirection,
        themeColor,
        setThemeColor,
        layoutType,
        setLayoutType,
        containerOption,
        setContainerOption,
        sidebarType,
        setSidebarType,
        cardWith,
        setCardWith,
      }}
    >
      <Header />
      <AsideBar />;
    </ThemeContext.Provider>
  );
}
