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
import logoIcon from "../assets/Logo.png";

const footerMenu1 = [
    {title: "Contact Us",
        link : "https://stripefeecalculator.net/page/contact-us/"},
    {
        title: "About Us",
        link: "https://stripefeecalculator.net/page/about-us/"
    },
    {
        title: "Privacy Policy",
        link: "https://stripefeecalculator.net/page/privacy-policy/",
    },
    {
        title: "Terms of Service",
        link: "https://stripefeecalculator.net/page/terms-and-service/"
    },
    {
        title: "DMCA Policy",
        link: "https://stripefeecalculator.net/page/dmca/"
    },
    {
        title: "Authors",
        link: "",
    },
    {
        title: "Work with Us",
        link: "https://stripefeecalculator.net/page/work-with-us/",
    },
    {
        title: "FAQ",
        link: ""
    }
]
const footerMenu2 = [
    {
        title: "Advertise",
        link: "https://stripefeecalculator.net/page/advertise/"
    },
    {
        title: "Accessability",
        link: "https://stripefeecalculator.net/page/accessibility/"
    },
    {
        title: "Guest Posting",
        link: "https://stripefeecalculator.net/page/guest-posting/"
    },
    {
        title: "Terms of Sale",
        link: "https://stripefeecalculator.net/page/terms-of-sale/"
    },
    {
        title: "Site Map",
        link: ""
    },
    {
        title: "Subscription",
        link: "https://stripefeecalculator.net/page/subscription/"
    }
]
const footerMenu3 = [
    {
        title: "Blog/Articles",
        link: "https://stripefeecalculator.net/page/help/"
    },
    {
        title: "Trust",
        link: "https://stripefeecalculator.net/page/trust/"
    },
    {
        title: "Help",
        link: "https://stripefeecalculator.net/page/help/"
    }
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
                <Box sx={{flexGrow: 1, display: {xs : 'none', md : 'flex'}, padding: 2}}>
                    <a href="/"><img src={logoIcon} style={{width: '70px'}}/></a>
                    <Typography variant = "h4" sx = {{
                            fontWeight: "bold",
                            flexGrow: 1,
                            marginTop: 2,
                            marginLeft: 2,
                    }}>
                        Stripe Fee Calculator
                    </Typography>
                </Box>
                <Box sx = {{
                    display : {md : 'none', xs : 'flex', flexGrow: 1}
                }}>
                   <img src={logoIcon} style={{width: '70px'}}/> 
                </Box>
                <Typography>
                    {/* <Link sx = {{
                        textDecoration: 'none'
                    }}>Back to Top</Link> */}
                    <BackToTopLink/>
                </Typography>
            </Toolbar>
            <Box sx = {{
                width: {md: '80%', xs : '100%'},
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
                        display: {xs : 'none', md : 'flex'},
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2,
                    }}>
                        {footerMenu1.map(({title, link}) => (
                            <Link key={title} href={link} sx = {{
                                textDecoration: "none"
                            }}>
                                {title}
                            </Link>
                        ))}
                    </Box>
                    <Box sx = {{
                        display : {md : 'none'},
                        margin: 2,
                    }}>
                       {footerMenu1.map(({title, link}) => (
                            <Box key={title} sx = {{
                                border: 1,
                                borderRadius: 1,
                                padding: 1,
                                margin: 0.5,
                                display: 'inline-block'
                            }}>
                            <Link href={link} sx = {{
                                textDecoration: "none",
                            }}>
                                {title}
                            </Link>
                            </Box>
                        ))} 
                    </Box>
                    <Box sx = {{
                        display: {md : 'flex', xs : 'none'},
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2,
                    }}>
                        {footerMenu2.map((item) => (
                            <Link key={item.title} href={item.link} sx = {{
                                textDecoration: "none"
                            }}>
                                {item.title}
                            </Link>
                        ))}
                    </Box>
                    <Box sx = {{
                        display : {md : 'none'},
                        margin: 1,
                    }}>
                       {footerMenu2.map(({title, link}) => (
                            <Box key={title} sx = {{
                                border: 1,
                                borderRadius: 1,
                                padding: 1,
                                margin: 0.5,
                                display: 'inline-block'
                            }}>
                            <Link href={link} sx = {{
                                textDecoration: "none",
                            }}>
                                {title}
                            </Link>
                            </Box>
                        ))} 
                    </Box>
                    <Box
                    sx = {{
                        display: {md: 'flex', xs : 'none'},
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 2
                    }}>
                        {footerMenu3.map((item) => (
                           <Link key={item.title} href={item.link} sx = {{
                            textDecoration: "none"
                           }}>
                            {item.title}
                           </Link>
                        ))}
                    </Box>
                    <Box sx = {{
                        display : {md : 'none'},
                        margin: 2,
                    }}>
                       {footerMenu3.map(({title, link}) => (
                            <Box key={title} sx = {{
                                border: 1,
                                borderRadius: 1,
                                padding: 1,
                                margin: 0.5,
                                display: 'inline-block'
                            }}>
                            <Link href={link} sx = {{
                                textDecoration: "none",
                            }}>
                                {title}
                            </Link>
                            </Box>
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