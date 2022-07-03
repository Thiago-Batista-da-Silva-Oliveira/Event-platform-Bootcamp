import { gql, useMutation } from "@apollo/client"
import  { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const CREATE_SUBSCRIBE_MUTATION = gql `
  mutation CreateSubscriber ($name: String!, $email: String!){
    createSubscriber(data: {name :$name, email: $email}) {
        id
    } 
  }
`

export const Subscribe = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBE_MUTATION)

    const handleSubscribe = async(e: FormEvent) => {
       e.preventDefault()
      await createSubscriber({
          variables: {
            name,
            email
          } 
       })

       navigate('/event')
    }
    return (
        <div className="min-h-screen flex flex-col items-center">
          <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
             <div className="max-w-[640px]">
                <h1>Logo</h1>
                <h1 className="mt-8 text-[2.5rem] leading-tight">
                   Event platform
                </h1>
                <p className="mt-4 text-gray-200 leading-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus dolor et ipsum eleifend finibus. Phasellus quis dui varius, tincidunt velit id, scelerisque velit. Nunc consectetur finibus dapibus.
                </p>
             </div>
             <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                <strong className="text-2xl mb-6 block">Sign up for free</strong>
                <form
                 onSubmit={handleSubscribe}
                 className="flex flex-col gap-2 w-full">
                  <input
                   className="bg-gray-900 rounded px-5 h-14"
                   type="text"
                   placeholder="Your full name"
                   onChange={e => setName(e.target.value)}
                />
                  <input
                   className="bg-gray-900 rounded px-5 h-14"
                   type="text"
                   placeholder="Your email"
                   onChange={e => setEmail(e.target.value)}
                />
                  
                   <button
                    disabled={loading}
                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition disabled:opacity-50"
                    type="submit">
                     Enroll
                   </button>
                </form>
             </div>
          </div>
        </div>
    )
}