import React, { useEffect, useState } from 'react'
import './card.css'
import axios from 'axios'

const Card = () => {
    const [transform, setTransform] = useState({x: 0, y: 0})
    const [avatarUrl, setAvatarUrl] = useState("")
    const [followers, setFollowers] = useState()
    const [following, setFollowing] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://api.github.com/users/shktabish")
                const data = res.data
                setAvatarUrl(data.avatar_url)
                setFollowers(data.followers)
                setFollowing(data.following)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

  return (
    <div className='cardCon'>
        <div className="card mb-[20vh] rounded-xl"
        onMouseMove={(e) => {
            //getting the left, right, width and height of the card
            const left = e.currentTarget.getBoundingClientRect().left
            const top = e.currentTarget.getBoundingClientRect().top
            const width = e.currentTarget.getBoundingClientRect().width
            const height = e.currentTarget.getBoundingClientRect().height
            
            //calc the percentage of where the card is
            const xPer = (e.clientX - left) / width
            const yPer = (e.clientY - top) / height

            //using the percentage to get the rotation to move the card
            const xRot = (xPer - 0.5) * 20
            const yRot = (0.5 - yPer) * 20

            setTransform({x: yRot, y:xRot})
        }}

        onMouseLeave={() => {
            setTransform({x:0, y:0})
        }}

        style={{transform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg)`}}
        >
        <div className='flex flex-col gap-2'>
            <div className='flex justify-start gap-5 py-3 '>
                <div>
                    <img className='rounded-full w-20' src={avatarUrl} />
                    <div className='text-center mt-2'>Tabish</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-xl font-semibold'>Followers</div>
                    <div className='text-lg'>{followers}</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-xl font-semibold'>Following</div>
                    <div className='text-lg'>{following}</div>
                </div>
            </div>
            <div>
                <div className='font-Neue mb-1'>Contribution Stats</div>
                <img src="https://github-readme-stats.vercel.app/api?username=shktabish&show_icons=true&theme=dark" alt="github stats" />
            </div>
            <div>
                <div className='font-Neue mb-1'>Languages Used</div>
                <div className='rounded-sm overflow-hidden' style={{border: "1px solid white"}}>
                    <img src="./Skills/github.jpg" alt="languages used"/>
                </div>
            </div>
            <div className='bg-white text-black w-max py-2 px-4 font-Neue font-semibold rounded-md cursor-pointer my-2'>
                <a href="https://github.com/shktabish" target='_blank'>View my profile</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card