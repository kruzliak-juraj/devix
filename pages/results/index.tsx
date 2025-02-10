import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Result } from "@/pages/api/results";
import { Button } from "@mui/material";

export default function Results({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(results);
  return (
    <>
      <Head>
        <title>Results - Devix sports</title>
        <meta name="description" content="Devix sports - results" />
      </Head>
      <p>these are the results</p>
      <Button>Test</Button>
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
