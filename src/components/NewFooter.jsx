import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import logoIcon from "../assets/Logo.png";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText"

const menuItems = [
    {
        title: "DMCA",
        link: "https://stripefeecalculator.net/page/dmca/"
    },
    {
        title: "Work With Us",
        link: "https://stripefeecalculator.net/page/work-with-us/"
    },
    {
        title: "Advertise",
        link: "https://stripefeecalculator.net/page/advertise/"
    },
    {
        title: "Guest Posting",
        link: "https://stripefeecalculator.net/page/guest-posting/"
    },
    {
        title: "Site Mapping",
        link: "https://stripefeecalculator.net/page/sitemap_index.xml"
    }
]
const NewFooter = () => {
    return <Box sx = {{
        width: {md: '80%', xs: '100%'},
        mx: 'auto',
        my: 2,
    }}>
    <Divider sx = {{
        borderWidth: 1,
        borderColor: 'black'
    }}/>
    <Box sx = {{
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
        my: 2
    }}>
    <Box sx = {{
        display: 'flex',
        flexDirection: {md: 'row', xs: 'column'},
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <img src={logoIcon} style={{
            width: '100px'
        }}/>
        <Typography>
        {"Explore the Stripe Fee Calculator – a powerful tool providing clarity on transaction costs. Calculate fees effortlessly and make informed financial decisions in seconds.This calculator is a quick, simple way to figure out how much Stripe’s processing fee will be when you are receiving money through their service.."}
                </Typography>
    </Box>
    <List sx = {{
        display: 'flex',
        flexDirection: {md: 'row', xs: 'column'},
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        {menuItems.map(({title, link}) => (
            <ListItem key={title} component="a" href={link} sx={{
                '&:link, &:visited': {
                    color: '#2e83e4', // Sets color of the link to blue
                },
                '&:hover': {
                    '& .MuiTypography-root': {
                        color: 'black', // Sets color of text inside ListItemText to black on hover
                    },
                    borderColor: 'black'
                }
            }}>
                <ListItemText  primary={title} sx = {{
                border: 2 ,
                borderColor: 'inherit',
                borderWidth: 3,
                borderRadius: 4,
                textAlign: 'center',
                p: 1.5,
                px: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'inherit'
            }}/>
            </ListItem>
        ))}
    </List>
    <Typography>
    © 2024 by Stripe Fee Calculator: All rights reserved
    </Typography>
    </Box>
    <Divider sx = {{
        borderWidth: 1,
        borderColor: 'black'
    }}/>
    </Box>
}

export default NewFooter