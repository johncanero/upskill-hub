/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

type Props = {};

const LoginMobile: React.FC<Props> = ({ }) => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleProfileClick = () => {
        router.push("/profile");
    };

    return (
        <div>
            {session ? (
                // Render Google image instead of the CgProfile icon
                // eslint-disable-next-line @next/next/no-img-element, @next/next/no-html-link-for-pages
                <a
                    href="/profile"
                    onClick={(e) => {
                        e.preventDefault();
                        handleProfileClick();
                    }}
                    rel="noopener noreferrer"
                >
                    <div className="flex">
                        <img
                            src={session.user?.image!}
                            alt="user-avatar"
                            className="w-6 mx-auto rounded-full cursor-pointer md:w-7 2xl:h-12 2xl:w-12 hover:opacity-50"
                        />
                        <p className="ml-2 font-medium font-OpenSans">{session.user?.name!}</p>
                    </div>
                </a>
            ) : (
                // Render the login button
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        signIn("google");
                    }}
                >
                    <div className="flex">
                        <CgProfile size={24} />
                        <p className="ml-2 font-medium font-OpenSans">Profile</p>
                    </div>
                </button>
            )}
        </div>
    );
};

export default LoginMobile;
