import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Form = () => {
  return (
    <div>
      <FormControl variant="standard" style={{ minWidth: 120 }}>
        <InputLabel id="slippage-label">Slippage</InputLabel>
        <Select labelId="slippage-label" id="slippage" label="Slippage">
          <MenuItem value="Low">0%</MenuItem>
          <MenuItem value="Medium">0.1%</MenuItem>
          <MenuItem value="High">0.5%</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Form;
