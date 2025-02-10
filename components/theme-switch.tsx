import { useColorScheme } from "@mui/material/styles";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function ThemeSwitch() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        p: 3,
        minHeight: "26px",
      }}
    >
      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) =>
            setMode(event.target.value as "system" | "light" | "dark")
          }
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
