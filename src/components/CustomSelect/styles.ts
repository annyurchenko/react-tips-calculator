import { StylesConfig } from "react-select";
import { Color } from "../../ui/colors";
import { ITipOption } from "../../types";

export const customStyles: StylesConfig<ITipOption> = {
  control: (styles) => {
    return {
      ...styles,
      borderRadius: 30,
      border: "none",
      width: "100%",
      display: "flex",
      alignItems: "center",
    };
  },

  singleValue: (styles) => {
    return {
      ...styles,
      padding: "10px 135px",
      textAlign: "center",
      color: Color.DarkGray,
      fontSize: "16px",
    };
  },

  indicatorsContainer: (styles) => {
    return {
      ...styles,
      position: "absolute",
      top: "5px",
      right: "10px",
    };
  },

  indicatorSeparator: (styles) => {
    return {
      ...styles,
      width: 0,
    };
  },
};
