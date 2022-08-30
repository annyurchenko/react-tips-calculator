import Select, { SingleValue } from "react-select";
import { ITipOption } from "../../types";
import { customStyles } from "./styles";

interface IProps {
  tips: number;
  setTips: (value: number) => void;
}

export const options: ITipOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const CustomSelect = ({ tips, setTips }: IProps) => {
  const getValue = () =>
    tips ? options.find((option) => option.value === tips) : options[0];

  const handleTips = (option: SingleValue<ITipOption>) => {
    if (option) setTips(option.value);
  };

  return (
    <Select
      options={options}
      value={getValue()}
      onChange={handleTips}
      styles={customStyles}
      isMulti={false}
      isSearchable={false}
    />
  );
};
