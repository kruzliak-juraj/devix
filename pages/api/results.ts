import type { NextApiRequest, NextApiResponse } from "next";

export type Result = {
  team1: string;
  team1Score: number;
  team2: string;
  team2Score: number;
  matchDate: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result[]>,
) {
  res.status(200).json([
    {
      team1: "Lions",
      team1Score: 24,
      team2: "Tigers",
      team2Score: 30,
      matchDate: "2025-01-10",
    },
    {
      team1: "Eagles",
      team1Score: 18,
      team2: "Bears",
      team2Score: 27,
      matchDate: "2025-01-15",
    },
    {
      team1: "Sharks",
      team1Score: 32,
      team2: "Wolves",
      team2Score: 28,
      matchDate: "2025-01-18",
    },
    {
      team1: "Lions",
      team1Score: 22,
      team2: "Eagles",
      team2Score: 29,
      matchDate: "2025-01-20",
    },
    {
      team1: "Panthers",
      team1Score: 35,
      team2: "Hawks",
      team2Score: 29,
      matchDate: "2025-01-22",
    },
    {
      team1: "Dragons",
      team1Score: 23,
      team2: "Knights",
      team2Score: 19,
      matchDate: "2025-01-25",
    },
    {
      team1: "Tigers",
      team1Score: 26,
      team2: "Bears",
      team2Score: 22,
      matchDate: "2025-01-28",
    },
    {
      team1: "Wolves",
      team1Score: 31,
      team2: "Lions",
      team2Score: 27,
      matchDate: "2025-01-30",
    },
    {
      team1: "Panthers",
      team1Score: 28,
      team2: "Sharks",
      team2Score: 33,
      matchDate: "2025-02-02",
    },
    {
      team1: "Eagles",
      team1Score: 24,
      team2: "Knights",
      team2Score: 21,
      matchDate: "2025-02-05",
    },
    {
      team1: "Hawks",
      team1Score: 30,
      team2: "Dragons",
      team2Score: 34,
      matchDate: "2025-02-08",
    },
    {
      team1: "Bears",
      team1Score: 19,
      team2: "Wolves",
      team2Score: 23,
      matchDate: "2025-02-11",
    },
    {
      team1: "Tigers",
      team1Score: 29,
      team2: "Panthers",
      team2Score: 31,
      matchDate: "2025-02-14",
    },
    {
      team1: "Lions",
      team1Score: 25,
      team2: "Hawks",
      team2Score: 28,
      matchDate: "2025-02-17",
    },
    {
      team1: "Sharks",
      team1Score: 27,
      team2: "Eagles",
      team2Score: 26,
      matchDate: "2025-02-20",
    },
  ]);
}
