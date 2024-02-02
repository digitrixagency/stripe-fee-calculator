import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import BackToTopLink from "./BackToTopLink";

import fImg from "../assets/Facebook.png";
import pImg from "../assets/Pinterest.png";
import tImg from "../assets/TwitterX.png";
import IImg from "../assets/Instagram.png";
import lImg from  "../assets/LinkedIn.png"

const footerMenu1 = [
    "Contact Us",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
    "DMCA Policy",
    "Authors",
    "Work with Us",
    "FAQ"
]
const footerMenu2 = [
    "Advertise",
    "Accessability",
    "Guest Posting",
    "Terms of Service",
    "Site Map",
    "Terms of Sale",
    "Subscription"
]
const footerMenu3 = [
    "Blog/Articles",
    "Trust",
    "Help"
]

const socialList = [
    {
        title: "Facebook",
        url: fImg,
    },
    {
        title: "Pinterest",
        url: pImg,
    },
    {
        title: "TwitterX",
        url: tImg,
    },
    {
        title: "Instagram",
        url: IImg,
    },
    {
        title: "LinkedIn",
        url: lImg,
    }
]
const Footer = () => {
    return (
        <Box sx = {{
            display : 'flex',
            flexDirection: 'column',
            alignItems:'center',
            margin: 2,
        }}>
            <Toolbar sx = {{
                alignSelf: 'normal'
            }}>
                <Typography variant = "h4" sx = {{
                    fontWeight: "bold",
                    flexGrow: 1,
                }}>
                    LOGO
                </Typography>
                <Typography>
                    {/* <Link sx = {{
                        textDecoration: 'none'
                    }}>Back to Top</Link> */}
                    <BackToTopLink/>
                </Typography>
            </Toolbar>
            <Box sx = {{
                width: '80%',
            }}>
                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    margin: 2
                }}>
                    <Box sx = {{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2,
                    }}>
                        {footerMenu1.map((item) => (
                            <Typography key={item}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                    <Box sx = {{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2,
                    }}>
                        {footerMenu2.map((item) => (
                            <Typography key={item}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                    <Box
                    sx = {{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2
                    }}>
                        {footerMenu3.map((item) => (
                            <Typography key={item}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
           <Box sx = {{
            alignSelf: 'flex-end'
           }}>
            <Box>
                {socialList.map(({title, url}) => (
                    <Link href="#" key={title} sx = {{
                        width: '10px',
                    }}>
                        <img src={url} srcSet={url} alt={title}/>
                    </Link>
                ))}
            </Box>
            </Box> 
            <Typography>
                Copyright 2024 Calender. All right reserved
            </Typography>
        </Box>
    )
}
export default Footer;