import { StylesConfig } from "react-select";
import { Color } from "../../styles/colors";
import { ITipOptions } from "../../types";

export const customStyles: StylesConfig<ITipOptions> = {
  control: (styles) => {
    return {
      ...styles,
      borderRadius: 30,
      border: "none",
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

  indicatorSeparator: (styles) => {
    return {
      ...styles,
      width: 0,
    };
  },
};
