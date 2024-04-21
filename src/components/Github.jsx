import { GlobeDemo } from "./GlobeDemo"
import Card from "./ui/Card"

const Github = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
        <div className="font-Neue text-7xl font-bold max-md:text-5xl py-2 px-8">GitHub Stats</div>
        <div className="flex max-lg:flex-col">
            <div className="w-[70vw] flex justify-center items-center">
                <Card />
            </div>
            <GlobeDemo />
        </div>
    </div>
  )
}

export default Github