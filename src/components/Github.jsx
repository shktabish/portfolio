import { GlobeDemo } from "./GlobeDemo"
import Card from "./ui/Card"

const Github = () => {
  return (
    <div id="github" className="min-h-screen w-full">
        <div className="font-Neue text-6xl font-bold max-md:text-4xl py-2 px-8">GitHub Stats</div>
        <div className="flex max-lg:flex-col">
            <div className="w-[70vw] mt-10 max-lg:w-[100vw] flex justify-center items-center">
                <Card />
            </div>
            <GlobeDemo />
        </div>
    </div>
  )
}

export default Github