import Link from "next/link"
import Image from "next/image"
import RenderTag from "./RenderTag"

// import { getHotQuestions } from "@/lib/actions/question.action";
// import { getTopPopularTags } from "@/lib/actions/tag.action";

const hotQuestions = [
    {_id: 1, title: "what"},
    {_id: 2, title: "what"},
    {_id: 3, title: "what"},
    {_id: 4, title: "what"},
]
const popularTags = [
    {_id: 1, name: "js", totalQuestions: 3},
    {_id: 2, name: "react", totalQuestions: 4},
    {_id: 3, name: "next", totalQuestions: 3},
    {_id: 4, name: "vue", totalQuestions: 5},

]


const RightSidebar = async () => {
  //   const hotQuestions = await getHotQuestions();
  //   const popularTags = await getTopPopularTags();
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/question/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="chevron right"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RightSidebar
