import Link from "next/link";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
  description:
    "Dev Overflow is a community for developers to share their knowledge and experience.",
};
export default async function Home() {
  

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button
            className="primary-gradient min-h-[46px] px-4 py-3
           !text-light-900"
          >
            Ask a Question
          </Button>
        </Link>
      </div>
     
    </>
  );
}