import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordian from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqList = [
    {
            id: "1",
            question: "What is a Stripe Fee Calculator, and how can it benefit my business?",
            answer : " A Stripe Fee Calculator is a tool that helps you estimate the fees associated with using Stripe for payment processing, providing transparency and financial insights."
    },
    {
        id: "2",
        question: "How do I use the Stripe Fee Calculator to calculate fees for a specific transaction?",
        answer: "Simply input the transaction amount, currency, and any additional details into the calculator, and it will generate a breakdown of the associated Stripe fees."
    },
    {
        id: "3",
        question: "Can I negotiate custom rates with Stripe to reduce transaction fees?",
        answer: "Yes, reaching out to the Stripe sales team allows you to inquire about custom rates tailored to your business, potentially reducing transaction costs."
    },
    {
        id:"4",
        question : "Is upgrading my Stripe plan a viable strategy to reduce fees?",
        answer : "Upgrading to a monthly Stripe plan may be cost-effective for businesses processing numerous invoices, potentially saving money compared to per-transaction fees."
    },
    {
        id: "5",
        question: "How does combining payments with recurring customers help in reducing Stripe fees?",
        answer: "By consolidating transactions, you limit the frequency of incurring fixed fees, optimizing your cost structure and reducing overall transaction expenses."
    },
    {
        id: "6",
        question: "Can the Stripe Fee Calculator handle multiple currencies for fee calculations?",
        answer: "Yes, the calculator can accommodate various currencies, considering different fees or currency conversions that may apply."
    },
    {
        id: "7",
        question: "Is there a limit to the number of transactions the Stripe Fee Calculator can handle?",
        answer: "The calculator is designed to handle a high volume of transactions, providing accurate fee calculations for businesses of all sizes."
    },
    {
        id: "8",
        question: "Are there any additional fees not accounted for by the Stripe Fee Calculator?",
        answer: "The calculator covers standard processing fees but may not include additional services or features offered by Stripe, which could incur separate charges."
    },
    {
        id: "9",
        question: "How often should I use the Stripe Fee Calculator for my business transactions?",
        answer: "It's advisable to use the calculator whenever there are changes in transaction amounts, currencies, or payment types to ensure up-to-date and accurate fee calculations."
    },
    {
        id: "10",
        question: "Can the Stripe Fee Calculator be integrated into my existing payment processing system?",
        answer: "Some versions of the calculator may offer integration options, ensuring seamless incorporation into your current financial tools for enhanced convenience."
    }
]
const FAQSection = () => {
 
    return (<Box sx = {{
        width: '80%',
        padding: 2
    }}>
        <Typography variant="h5" sx = {{
            textAlign : 'center',
            fontWeight: 'bold',
            marginBottom: 2,
        }}>
            Frequently Asked Questions
        </Typography>
        {/* <Typography variant="body1" sx = {{
            textAlign: 'center',
        }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. support@digix.com
        </Typography> */}

        <Box sx = {{
            margin: 2
        }}>
            {faqList.map(({id, question, answer}) => (
                <Accordian key={id} defaultExpanded = {id === "1"} sx = {{
                    bgcolor: "#D9D9D9",
                    boxShadow: 0,
                    zIndex: 'modal'
                }}>
                    <AccordianSummary expandIcon={<ExpandMoreIcon/>} id = {id}>
                        {question}
                    </AccordianSummary>
                    <AccordianDetails sx = {{
                        bgcolor: "#F4F4F4"
                    }}>
                        {answer}
                    </AccordianDetails>
                </Accordian>
            ))}
        </Box>
    </Box>)
}

export default FAQSection;