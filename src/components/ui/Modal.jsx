import { useState } from "react"
import { IoClose } from "react-icons/io5"

const Modal = ({ isLoginOpen, setIsLoginOpen,setIsLoggedIn }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

  return (
    <div className={`h-full w-full bg-black/75 fixed flex justify-center items-center ${isLoginOpen? "block" : "hidden"}`}>
        <div className="bg-[#232123] flex flex-col items-center gap-2 px-3 py-4 rounded-md relative">
            <form onSubmit={handleSubmit} className="flex flex-col border-t-[1px] border-[#363436] mt-4 pt-4">
                <label className="block text-[#b3b3b3]">Email Address</label>
                <input 
                        type="text"
                        value={email}
                        placeholder="Your email address"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-96 max-sm:w-80 text-white p-2 border-[1px] bg-[#1D1C1D] mt-2 mb-3 rounded-md border-[#363436] focus:outline-none"
                />
                <button className="w-96 max-sm:w-80 p-2 bg-[#363436] text-white rounded-md my-4">Sign in</button>
            </form>
            <p className="text-[#b3b3b3] underline decoration-solid">Forgot your password?</p>
            <p className="text-[#b3b3b3] underline decoration-solid">Don't have an account? Sign up</p>
            <IoClose 
                className="absolute top-3 right-3 fill-[#363436] text-2xl cursor-pointer" 
                onClick={() => setIsLoginOpen(false)} 
            />
        </div>
    </div>
  )
}

export default Modal