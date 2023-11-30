import Posts from "./components/Posts";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome,&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Hopago</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
