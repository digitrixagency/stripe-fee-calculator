import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FeeCalculation = () => {
    return <Box width="80%">
    <Box marginY={2}>
    <Typography variant="h6">
        How Stripe Fee Calculation Works
    </Typography>
    <Typography varaint="body1">
    {"Let's break down how the Stripe Fee Calculation works using the formula provided for four of the most popular currencies: USD (United States Dollar), EUR (Euro), GBP (British Pound), and JPY (Japanese Yen)."}
    </Typography>
    </Box>
    <Box marginY={2}>
    <Typography variant="h6">
        FORMULA
    </Typography>
    <Typography variant="h7">
        Fee=Fixed Fee+(Transaction Amount×Percentage Fee)
    </Typography>
    </Box>
    <Box marginY={2}>
    <Typography variant="h6">
    Given Values for Illustration:
    </Typography>
    <ul>
        <li>Fixed Fee: $0.30</li>
        <li>Percentage Fee: 2.9%</li>
    </ul>
    </Box>
    </Box>
}

export default FeeCalculation;