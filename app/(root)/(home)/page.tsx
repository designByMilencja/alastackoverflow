import Link from "next/link"
import { Button } from "@/components/ui/button"
import QuestionCard from "@/components/cards/QuestionCard"
// import {
//   getQuestions,
//   getRecommendedQuestions,
// } from "@/lib/actions/question.action";
import { SearchParamsProps } from "@/types"
// import Pagination from "@/components/shared/Pagination";
import type { Metadata } from "next"
import LocalSearch from "@/components/shared/search/LocalSearch"
import Filter from "@/components/shared/Filter"
import { HomePageFilters } from "@/constants/filters"
import HomeFilters from "@/components/home/HomeFilters"
import NoResult from "@/components/shared/NoResult"
// import { auth } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
  description: "Dev Overflow is a community for developers to share their knowledge and experience.",
}
const questions = [
  {
    _id: '1',
    title: 'How to Use React Hooks',
    tags: [
      { _id: 'tag1', name: 'React' },
      { _id: 'tag2', name: 'Hooks' },
    ],
    author: {
      _id: 'author1',
      name: 'John Doe',
      picture: 'url_to_picture',
    },
    upvotes: ['user1', 'user2'],
    views: 120,
    answers: [
      { userId: 'user1', content: 'Lorem ipsum dolor sit amet.' },
      { userId: 'user2', content: 'Consectetur adipiscing elit.' },
    ],
    createdAt: new Date('2023-01-15T12:30:00Z'),
  },
  {
    _id: '2',
    title: 'Introduction to TypeScript',
    tags: [
      { _id: 'tag3', name: 'TypeScript' },
      { _id: 'tag4', name: 'JavaScript' },
    ],
    author: {
      _id: 'author2',
      name: 'Jane Smith',
      picture: 'url_to_picture',
    },
    upvotes: ['user1', 'user3'],
    views: 85,
    answers: [
      { userId: 'user1', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { userId: 'user3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ],
    createdAt: new Date('2023-02-02T09:45:00Z'),
  },
];
export default async function Home({ searchParams }: SearchParamsProps) {
  // const { userId } = auth();
  // let result;

  // if (searchParams?.filter === "recommended") {
  //   if (userId) {
  //     result = await getRecommendedQuestions({
  //       searchQuery: searchParams.q,
  //       page: searchParams.page ? +searchParams.page : 1,
  //       userId,
  //     });
  //   } else {
  //     result = {
  //       questions: [],
  //       isNext: false,
  //     };
  //   }
  // } else {
  //   result = await getQuestions({
  //     searchQuery: searchParams.q,
  //     filter: searchParams.filter,
  //     page: searchParams.page ? +searchParams.page : 1,
  //   });
  // }

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
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch route="/" iconPosition="left" imgSrc="/assets/icons/search.svg" placeholder="Search for questions" otherClasses="flex-1" />
        <Filter filters={HomePageFilters} otherClasses="min-h-[56px] sm:min-w-[170px]" containerClasses="hidden max-md:flex" />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 1 ? (
          questions.map((question) => <QuestionCard key={question._id} _id={question._id} title={question.title} tags={question.tags} author={question.author} upvotes={question.upvotes} views={question.views} answers={question.answers} createdAt={question.createdAt} />)
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. Our query could be the next big thing others learn from. Get
        involved! 💡"
            link={"/ask-questions"}
            linkTitle="Ask a Question"
          />
        )}
      </div>
      {/* <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div> */}
    </>
  )
}
