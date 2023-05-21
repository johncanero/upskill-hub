import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {};


const LoginMobile: React.FC<Props> = ({ }) => {
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                // Render Google image instead of the CgProfile icon
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={session.user?.image!}
                    alt='user-avatar'
                    className='w-6 mx-auto rounded-full cursor-pointer md:w-7 2xl:h-12 2xl:w-12 hover:opacity-50'
                />
            ) : (
                // Render the login button
                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('google');
                }}>
                    <CgProfile size={24} className="mt-2" />
                </button>
            )}
        </div>
    )
}

export default LoginMobile;
