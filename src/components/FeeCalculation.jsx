import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const content = [
    {
        heading1: "USD (United States Dollar)",
        heading2: "Fee (USD)=$0.30+($100×0.029)=$3.20"
    },
    {
        heading1: "EUR (Euro)",
        heading2: "Assuming the exchange rate is 1 USD = 0.90 EUR (for illustration purposes)",
        heading3: "Fee (EUR)=$0.30+($100×0.029)×0.90=€2.88"
    },
    {
        heading1: "GBP (British Pound)",
        heading2: "Assuming the exchange rate is 1 USD = 0.75 GBP (for illustration purposes)",
        heading3: "Fee (GBP)=$0.30+($100×0.029)×0.75=£2.16"
    },
    {
        heading1: "JPY (Japanese Yen)",
        heading2: "Assuming the exchange rate is 1 USD = 110 JPY (for illustration purposes)",
        heading3: "Fee (JPY)=$0.30+($100×0.029)×110=¥359.08"
    }
]
const FeeCalculation = () => {
    return <Box width="80%">
    <Box marginY={2} textAlign="center">
    <Typography variant="h5" component={'h2'} fontWeight={"medium"}>
        How Stripe Fee Calculation Works
    </Typography>
    <Typography varaint="body1">
    {"Let's break down how the Stripe Fee Calculation works using the formula provided for four of the most popular currencies: USD (United States Dollar), EUR (Euro), GBP (British Pound), and JPY (Japanese Yen)."}
    </Typography>
    </Box>
    <Box marginY={2}>
    <Typography variant="h6" component={'h3'}>
        FORMULA
    </Typography>
    <Typography variant="body1">
        Fee=Fixed Fee+(Transaction Amount×Percentage Fee)
    </Typography>
    </Box>
    <Box marginY={2}>
    <Typography variant="h6" component={'h3'}>
    Given Values for Illustration:
    </Typography>
    <ul>
        <li>Fixed Fee: $0.30</li>
        <li>Percentage Fee: 2.9%</li>
    </ul>
    </Box>
    <Box marginY={2}>
        {content.map((item, index) => (
            <Box key={item.heading1} marginY={2}>
                <Typography variant="h7" component={'h4'} fontWeight={'bold'}>
                    {`${index+1}: ${item.heading1}: `}
                </Typography>
                <Typography variant="body1">
                    {item.heading2}
                </Typography>
                {item.heading3 && <Typography variant="body1">{item.heading3}</Typography>}
            </Box>
        ))}
    </Box>
    <Typography variant="body1" marginY={2}>
    These calculations demonstrate how the fixed fee and percentage fee contribute to the overall transaction fee in different currencies. Keep in mind that exchange rates may vary, affecting the final fee amounts in non-USD currencies.
    </Typography>
    </Box>
}

export default FeeCalculation;