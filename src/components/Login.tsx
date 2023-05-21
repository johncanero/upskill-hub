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
                    onClick={(() => signOut())}
                    src={session.user?.image!}
                    alt='user-avatar'
                    className='w-6 mx-auto rounded-full cursor-pointer md:w-8 lg:w-9 lg:mt-2 lg:mb-2 lg:mr-3 2xl:h-12 2xl:w-12 hover:opacity-50'
                />
            ) : (
                // Render the login button
                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('google');
                }}>
                    <CgProfile size={32} className="hidden lg:block lg:mr-3 lg:mt-2" />
                    <CgProfile size={24} className="mt-2 lg:hidden" />
                </button>
            )}
        </div>
    )
}

export default Login
