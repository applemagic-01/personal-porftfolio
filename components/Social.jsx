import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const socials = [
    { icon: <FaGithub />, path: 'https://github.com/applemagic-01' },
    { icon: <FaLinkedinIn />, path: 'www.linkedin.com/in/ankith-poojary-238423277' },
    { icon: <FaTwitter />, path: 'https://x.com/ankith_poojary6' },
]


const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>{socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles} >
                {item.icon}
            </Link>
        })}</div>
    )
}

export default Social