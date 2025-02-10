import type { NextApiRequest, NextApiResponse } from "next";

export type Result = {
  id: number;
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
      id: 1,
      team1: "Lions",
      team1Score: 24,
      team2: "Tigers",
      team2Score: 30,
      matchDate: "2025-01-10",
    },
    {
      id: 2,
      team1: "Eagles",
      team1Score: 18,
      team2: "Bears",
      team2Score: 27,
      matchDate: "2025-03-15",
    },
    {
      id: 3,
      team1: "Sharks",
      team1Score: 32,
      team2: "Wolves",
      team2Score: 28,
      matchDate: "2025-01-18",
    },
    {
      id: 4,
      team1: "Lions",
      team1Score: 22,
      team2: "Eagles",
      team2Score: 29,
      matchDate: "2025-04-20",
    },
    {
      id: 5,
      team1: "Panthers",
      team1Score: 35,
      team2: "Hawks",
      team2Score: 29,
      matchDate: "2025-01-22",
    },
    {
      id: 6,
      team1: "Dragons",
      team1Score: 23,
      team2: "Knights",
      team2Score: 19,
      matchDate: "2025-05-25",
    },
    {
      id: 7,
      team1: "Tigers",
      team1Score: 26,
      team2: "Bears",
      team2Score: 22,
      matchDate: "2025-01-28",
    },
    {
      id: 8,
      team1: "Wolves",
      team1Score: 31,
      team2: "Lions",
      team2Score: 27,
      matchDate: "2025-06-30",
    },
    {
      id: 9,
      team1: "Panthers",
      team1Score: 28,
      team2: "Sharks",
      team2Score: 33,
      matchDate: "2025-02-02",
    },
    {
      id: 10,
      team1: "Eagles",
      team1Score: 24,
      team2: "Knights",
      team2Score: 21,
      matchDate: "2025-07-05",
    },
    {
      id: 11,
      team1: "Hawks",
      team1Score: 30,
      team2: "Dragons",
      team2Score: 34,
      matchDate: "2025-02-08",
    },
    {
      id: 12,
      team1: "Bears",
      team1Score: 19,
      team2: "Wolves",
      team2Score: 23,
      matchDate: "2025-08-11",
    },
    {
      id: 13,
      team1: "Tigers",
      team1Score: 29,
      team2: "Panthers",
      team2Score: 31,
      matchDate: "2025-02-14",
    },
    {
      id: 14,
      team1: "Lions",
      team1Score: 25,
      team2: "Hawks",
      team2Score: 28,
      matchDate: "2025-09-17",
    },
    {
      id: 15,
      team1: "Sharks",
      team1Score: 27,
      team2: "Eagles",
      team2Score: 26,
      matchDate: "2025-02-20",
    },
  ]);
}
