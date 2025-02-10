import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface TeamSelectorProps {
  teamNames: string[];
  team: string;
  setTeam: Dispatch<SetStateAction<string>>;
}

export default function TeamSelector({
  teamNames,
  team,
  setTeam,
}: TeamSelectorProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Filter by Team name</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={team}
        label="Team"
        onChange={(event) => setTeam(event.target.value)}
        variant="standard"
      >
        <MenuItem value="">All Teams</MenuItem>
        {teamNames.map((team) => (
          <MenuItem key={team} value={team}>
            {team}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
