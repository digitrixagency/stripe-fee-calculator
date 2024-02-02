import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import plusImg from "../assets/Plus.png";
import cloudImg from "../assets/Download from the Cloud.png";
import OkImg from "../assets/Ok.png";
import delImg from "../assets/Delete Bookmark.png";
const cardContent = [
    {
        url: cloudImg,
        heading: "Transparency Boost",
        content: "Reveals the hidden costs, providing a clear breakdown of fees associated with Stripe transactions."
    },
    {
        url : plusImg,
        heading: "Time-Saving",
        content : "Efficiently computes fees, saving valuable time for businesses that need quick and accurate financial insights."
    },
    {
        url: OkImg,
        heading: "Informed Decision-Making",
        content: "Empower users to make strategic choices by understanding the impact of Stripe fees on their transactions."
    },
    {
        url: delImg,
        heading: "Cost Optimization",
        content: "Enables businesses to explore scenarios and choose payment strategies that minimize overall processing expenses."
    }
]
const CardGroup = () => {
    return <Box margin={2} sx = {{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {
            cardContent.map(({url, heading, content}) => (
                <Card key = {url} sx = {{
                    bgcolor: '#D9D9D9',
                    maxWidth: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 1,
                    borderRadius: 4,
                }}> 
                    <CardMedia component="img" image={url} sx = {{
                        width : '100px'
                    }}/>
                    <CardHeader title = {heading} sx = {{
                        textAlign: 'center'
                    }}/>
                    <CardContent>
                        <Typography variant="body2" sx = {{
                            textAlign: 'center'
                        }}>
                            {content}
                        </Typography>
                    </CardContent>
                </Card>
            ))
        }
    </Box>
}

export default CardGroup;