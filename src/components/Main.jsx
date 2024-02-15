import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardGroup from "./CardGroup";
import FAQSection from "./FAQSection";

const Main = () => {
    return <Box sx = {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2
    }}>
        <Typography variant="h4" component="h2" sx = {{
            fontWeight: 'bold',
            textAlign: 'center',
        }}>
        Benefits of Strip Fee Calculator
        </Typography>
        <Typography variant="body1" sx = {{
            padding: 2,
        }}>
        Unlock financial clarity with the Stripe Fee Calculator — your key to understanding and optimizing transaction costs effortlessly.
        </Typography>
        <CardGroup/>
        <FAQSection/>
    </Box>
}

export default Main;