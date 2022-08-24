import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { StyledForm, Title, Description, Total } from "./styles";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const Form = () => {
  const userBill = useInput();
  const userPersons = useInput();
  const [tips, setTips] = useState<number>(options[0].value);
  const [total, setTotal] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userBill.value && userPersons.value) {
      setTotal(
        (+userBill.value + (+userBill.value * tips) / 100) / +userPersons.value
      );
    }
  };

  useEffect(() => {
    if (userBill.value && userPersons.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userBill.value, userPersons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Description>Let's go calculate your tips</Description>
      <Input type="number" placeholder="Enter Bill..." {...userBill} />
      <Input type="number" placeholder="Enter Persons..." {...userPersons} />
      <CustomSelect tips={tips} setTips={setTips} />
      <Total>Total per person: {total.toFixed(2)} $</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
