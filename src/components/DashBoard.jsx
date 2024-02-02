import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import FormComponent from "./FormComponent"


const content1 = ["Navigating through the intricacies of Stripe fees can be overwhelming, especially for businesses processing numerous transactions. To alleviate this burden, Tipalti presents a user-friendly solution – the Stripe Fee Calculator. Tailored for businesses of all sizes, this tool is designed to streamline the process of calculating Stripe transaction fees, saving your valuable time and resources.",
"Our Stripe Fee Calculator simplifies the otherwise complex landscape of payment processing fees. Whether you're a part of a finance team or a small business owner, this tool empowers you to accurately estimate the fees associated with your Stripe transactions. With a positive and efficient approach, Tipalti ensures that your business stays focused on growth while effortlessly managing payment-related costs.",
"Say goodbye to confusion and hello to clarity as our calculator swiftly computes Stripe processing fees based on your inputs. Make informed financial decisions, optimize your payment strategies, and experience the ease of managing your transactions with Tipalti's Stripe Fee Calculator. Embrace a positive shift in your financial management – where simplicity meets savings."
]

const content2 = [{
    title: "Transaction Amount",
    desc: "To initiate the calculation, you'll need the total amount (in USD) of the Stripe payment. This forms the foundation for determining the processing fees."
},
{
    title: "Currency",
    desc: "Specify the currency in which the payment amount is listed. Similar to PayPal, Stripe may apply varied fees for different currencies or currency conversions."
},
{
    title: "Location",
    desc: "Recognize that certain Stripe fees depend on business and customer locations. Knowing the country or region is crucial for precise fee calculations."
},
{
    title: "Payment Type",
    desc: "Stripe tailors fees based on the payment method, be it credit cards, debit cards, international cards, or ACH payments. Specify the payment type for accurate results."
},
{
    title: "Additional Services",
    desc: "Explore additional features offered by your local Stripe website, such as recurring billing, diverse payment methods, and premium support. Be aware that these features may come with additional fees."
}]
const Dashboard = () => {
    return <Box sx = {{
        width : '100%',
        background : 'linear-gradient(#4D62D3, #fff)'
    }}>
        <Box sx = {{
            display : 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2
        }}>
            <Typography variant="h4" sx = {{
                fontSize: 'h4.fontSize',
                fontWeight: 'bold',
                margin: 2,
                textAlign: 'center'
            }}>
                Stripe Fee Calculator
            </Typography>
            <Typography component = 'p' sx = {{
                textAlign: 'center',
                width: '80%',
            }}>
            Navigate the cost of your transactions effortlessly with our Stripe Fee Calculator, simplifying the calculation of processing fees for your payments.
            </Typography>
        </Box>
        {/* <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2
        }}> */}
        <FormComponent/>
        {/* </Box> */}
        <Box sx = {{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            marginTop: 4,
        }}>
            <Typography component='h3' sx = {{
                fontSize: 'h5.fontSize',
                textAlign: 'center',
                fontWeight: 'medium'
            }}>
            Unlock Savings with Our Efficient Stripe Fee Calculator
            </Typography>
            <Box sx = {{
                width: '80%',
                marginY: 2,
            }}>
                {content1.map((description, index) => (
                    <Typography key={index} variant="body1" sx = {{
                        textAlign: 'left',
                    }}>
                        {description}
                    </Typography>
                ))}
            </Box>
            <Box width={'80%'} marginY={2}>
                <Typography variant="h5">
                What is Strip 
                </Typography>
                <Typography variant="body1">
                Stripe stands as a prominent player in the realm of online payments, serving as a highly regarded payment gateway since its establishment in 2010. Renowned for its developer-friendly approach, Stripe empowers businesses to seamlessly accept online payments, emerging as a leading global payment service provider. Beyond its core function, Stripe extends its capabilities to subscription management and billing solutions, distinguishing itself with a strong emphasis on customization through a robust API for payouts.
                </Typography>
                <Typography variant="body1">
                Businesses leveraging Stripe gain the advantage of setting up and managing recurring payments, subscription plans, and invoices. This functionality proves particularly beneficial for enterprises employing subscription-based models or those engaging in regular monthly transactions. With its user-friendly interface and versatile features, Stripe has become a trusted choice for companies seeking flexibility and efficiency in handling their online payment processes.
                </Typography>
            </Box>
            <Box width={'80%'} marginY={2}>
                <Typography variant="h5">
                What is the Stripe Fee Calculator
                </Typography>
                <Typography variant="body1">
                A Stripe Fee Calculator is a convenient online tool that helps users determine the processing fees associated with receiving payments through the Stripe payment gateway, offering a quick and transparent way to understand transaction costs.
                </Typography>
            </Box>
            <Box width={'80%'} marginY={2}>
                <Typography variant="h6">
                Unveiling the Key Data for Accurate Stripe Fee Calculations
                </Typography>
                <Typography variant="body1">
                Embarking on the journey of understanding and managing your Stripe fees requires a clear grasp of essential data points. Just like navigating through PayPal fees with the PayPal Fee Calculator, decoding Stripe fees demands attention to specific details. Our guide unveils the crucial data needed to wield the Stripe Fee Calculator effectively, ensuring accurate calculations and informed financial decisions.
                </Typography>
                <ul>
                    {content2.map(({title, desc}) => {
                        return <li key={title}><b>{title}: </b>{desc}</li>
                    })}
                </ul>
                <Typography variant="body1">
                Armed with this insightful data, your business can effortlessly input information into the Stripe Fee Calculator, generating a comprehensive breakdown of fees, including a percentage of the processing fee and a fixed fee per transaction. Mastering these nuances empowers businesses to navigate the intricacies of Stripe fees with confidence.
                </Typography>
            </Box>
        </Box>

    </Box>
}

export default Dashboard;