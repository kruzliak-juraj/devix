import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Result } from "@/pages/api/results";
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { useMemo, useState } from "react";
import TeamSelector from "@/components/team-selector";
import { visuallyHidden } from "@mui/utils";

export const RESULT_HEAD_CELLS = [
  "Team 1 name",
  "Team 1 score",
  "Team 2 score",
  "Team 2 name",
];

export default function Results({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [order, setOrder] = useState<"desc" | "asc" | null>(null);
  const [team, setTeam] = useState("");

  const teamNames = useMemo(() => {
    return [...new Set(results.flatMap((match) => [match.team1, match.team2]))];
  }, [results]);

  const filteredResults = useMemo(() => {
    if (!team) return results;
    return results.filter(
      (result) => result.team1 === team || result.team2 === team,
    );
  }, [team, results]);

  const sortedResults = useMemo(() => {
    if (!order) return filteredResults;

    return [...filteredResults].sort((a, b) => {
      const dateA = new Date(a.matchDate).getTime();
      const dateB = new Date(b.matchDate).getTime();
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [order, filteredResults]);

  return (
    <>
      <Head>
        <title>Results - Devix sports</title>
        <meta name="description" content="Match results of Devix sports" />
      </Head>

      <Stack spacing={3} pb={5}>
        <TeamSelector teamNames={teamNames} team={team} setTeam={setTeam} />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {RESULT_HEAD_CELLS.map((headCell) => (
                  <TableCell key={headCell}>{headCell}</TableCell>
                ))}
                <TableCell sortDirection={order ? order : false}>
                  <TableSortLabel
                    active={order !== null}
                    direction={order ? order : undefined}
                    onClick={() =>
                      setOrder((prevState) =>
                        prevState === "asc" ? "desc" : "asc",
                      )
                    }
                  >
                    Match Date
                    {order !== null ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order ? "sorted ascending" : "sorted descending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedResults.map((result) => (
                <TableRow hover key={result.id}>
                  <TableCell>{result.team1}</TableCell>
                  <TableCell>{result.team1Score}</TableCell>
                  <TableCell>{result.team2Score}</TableCell>
                  <TableCell>{result.team2}</TableCell>
                  <TableCell>{result.matchDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}

export const getServerSideProps = (async (context) => {
  // it seems that this is something what you need to do when calling server from server, since both actions are done on server :D
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = context.req.headers.host;
  const res = await fetch(`${protocol}://${host}/api/results`);

  const results: Result[] = await res.json();
  return { props: { results } };
}) satisfies GetServerSideProps<{ results: Result[] }>;
