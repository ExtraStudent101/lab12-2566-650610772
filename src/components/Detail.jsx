import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  let outPut = null;
  if (theme.name === "light") outPut = lang.detail.lightActivated;
  else outPut = lang.detail.darkActivated;
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {outPut}
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
    </p>
  );
};
