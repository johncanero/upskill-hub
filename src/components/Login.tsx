import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {};


const Login: React.FC<Props> = ({ }) => {
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                // Render Google image instead of the CgProfile icon
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={session.user?.image!}
                    alt='user-avatar'
                    className='w-7 md:w-8 lg:w-9 mx-auto lg:mt-2 lg:mb-2 lg:mr-3  rounded-full cursor-pointer 2xl:h-12 2xl:w-12 hover:opacity-50'
                />
            ) : (
                // Render the login button
                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('google');
                }}>
                    <CgProfile size={32} className="hidden lg:block lg:mr-3 lg:mt-2" />
                    <CgProfile size={24} className="lg:hidden mt-2" />
                </button>
            )}
        </div>
    )
}

export default Login
