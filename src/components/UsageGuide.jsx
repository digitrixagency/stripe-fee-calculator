import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const content = [
    {
        title: "Access the Calculator",
        desc1: "Visit the website or platform hosting the Stripe Fee Calculator. This could be a third-party financial tool, an official Stripe calculator, or a feature integrated into your payment processing system."
    },
    {
        title: "Enter Transaction Details",
        desc1: "Transaction Amount: Input the total amount of the transaction in the provided field. This is the amount for which you want to calculate the Stripe fees.",
        desc2: "Currency: Specify the currency in which the transaction amount is listed. Choose the relevant currency from the options available."
    },
    {
        title: "Specify Additional Information (if required)",
        desc1: "Some calculators may ask for additional details to provide more accurate results. This could include the location (country or region) of your business, the type of payment (credit card, debit card, etc.), and whether the transaction involves international payments."
    },
    {
        title: "Click Calculate or Get Results",
        desc1: "After entering all the necessary details, click the 'Calculate' or 'Get Results' button. The calculator will process the information using the Stripe fee formula and provide you with a breakdown of the fees associated with the transaction."
    },
    {
        title: "Review the Results",
        desc1: "Examine the results presented by the calculator. It should display the calculated fees, including the fixed fee and the percentage fee based on the transaction amount."
    },
    {
        title: "Understand the Breakdown",
        desc1: "Review the breakdown of fees to understand how much is attributed to the fixed fee and how much is calculated based on the percentage of the transaction amount. This breakdown helps in gaining clarity on the cost structure."
    },
    {
        title: "Repeat as Needed",
        desc1: "If you have multiple transactions or scenarios to calculate, repeat the process by entering new transaction details. The calculator allows you to efficiently assess fees for various payment scenarios."
    }
]
const UsageGuide = () => {
    return <Box width="80%" marginY={2}>
        <Box textAlign="center">
        <Typography variant="h5" component={'h2'} fontWeight={'medium'}>
        How to use Stripe Fee Calculator
        </Typography>
        <Typography variant="body1">
            {"Using a Stripe Fee Calculator is a straightforward process. Here's a step-by-step guide on how to use one:"}
        </Typography>
        </Box>
        {content.map((item, index) => (
            <Box key={item.title} marginY={2}>
                <Typography variant="h6" component={'h3'}>
                    {`Step ${index+1}: ${item.title}`}
                </Typography>
                <Typography variant="body1">
                    {item.desc1}
                </Typography>
                {item.desc2 && <Typography variant="body1">{item.desc2}</Typography>}
            </Box>
        ))}
        <Typography variant="body1" marginY={2}>
        Using a Stripe Fee Calculator simplifies the process of understanding the costs associated with using Stripe for payment processing, allowing businesses to make informed decisions regarding their financial transactions.
        </Typography>
        <Box>
            <Typography variant="h5" component={'h2'} fontWeight={'medium'}>
            How to Reduce Stripe Fees
            </Typography>
            <Typography variant="body1" marginY={1}>
            Maximizing your revenue and ensuring a positive experience for both you and your customers involves strategic approaches to minimize Stripe fees. A proactive step is to engage with the Stripe sales team to explore custom rates tailored to your business. Initiating a conversation about your transaction volume and business model can lead to more favorable terms, reducing the impact of fees on your earnings.
            </Typography>
            <Typography variant="body1" marginY={1}>
            Consider the possibility of upgrading your Stripe plan as a counterintuitive yet effective strategy. If your business frequently processes several invoices each month, opting for a monthly Stripe plan might prove more cost-effective. This can be advantageous, as paying a fixed monthly fee may offset the high percentage fees associated with individual transactions, ultimately saving you money in the long run.
            </Typography>
            <Typography variant="body1" marginY={1}>
            Collaborate with recurring customers to explore the option of combining payments. By consolidating transactions, you can limit the frequency of incurring fixed fees, optimizing your cost structure. This not only reduces fees but also streamlines the payment process for both you and your customers. Taking these strategic steps empowers you to navigate the landscape of Stripe fees with financial efficiency and customer satisfaction in mind.
            </Typography>
        </Box>
    </Box>
}

export default UsageGuide;