import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import styles from "./FormComponent.module.css";
import { useEffect, useState } from "react";


const FormComponent = () => {
    const [amount, setAmount] = useState(100);
    const [charge, setCharge] = useState(3.20);
    const [receivedAmount, setReceivedAmount] = useState(96.80);
    const [idealAmount, setIdealAmount] = useState(103.30);

    const percentageFee = 2.9;
    const fixedFee = 0.30;

    const content = [
        { heading1: "Stripe Fee", heading2: `$${charge}` },
        { heading1: "You will receive", heading2: `$${receivedAmount}` },
        { heading1: "You should ask for", heading2: `$${idealAmount}` }
    ];


    useEffect(() => {
        if(!amount || amount == 0){
            setCharge(0);
            setReceivedAmount(0);
            setIdealAmount(0);
        }
        else
        {

            let newCharge = fixedFee + (amount * percentageFee) / 100;
            newCharge = newCharge.toFixed(2);
            let newReceivedAmount = amount - newCharge;
            newReceivedAmount = newReceivedAmount.toFixed(2);
            let newIdealAmount = (amount*100 + fixedFee*100)/97.1;
            newIdealAmount = newIdealAmount.toFixed(2);
            setCharge(newCharge);
            
            setReceivedAmount(newReceivedAmount);
            setIdealAmount(newIdealAmount);
        }

    }, [amount]);

    return <Box sx = {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <form className={styles.inputForm}>
        <FormControl component='div' sx = {{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 1
        }}>
            <Typography variant="h6" component='label' htmlFor="amount" sx = {{
                fontWeight: 'bold',
                paddingBottom: 1,
            }}>
                Enter an Invoice Amount
            </Typography>
            {/* <OutlinedInput       defaultValue={`$${amount}`}
 value = {amount} sx = {{
                bgcolor : '#fff',
                borderRadius: 4,
            }} onChange={handleAmountChange}/> */}
                <div className={styles.currencyWrap}>
                <span className={styles.currencyCode}>$</span>
                <input className={styles.textCurrency} onChange={(e) => setAmount(e.target.value)} defaultValue={100}/>
                </div>
        </FormControl>
        </form>
        <Typography component='h5' sx = {{
            marginTop: 2,
            fontWeight: 'bold',
            fontSize : 'h5.fontSize'
        }}>
            Stripe Fee Calculator Result
        </Typography>
        <Box sx = {{display : 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap:"wrap",marginTop: 2, width: '100%', textAlign: 'center'}}>
            {content.map(({heading1, heading2}) => (
                <Box key={heading1}>
                    <Typography variant="h6">
                        {heading1}
                    </Typography>
                    <Typography variant="h6" textAlign={"left"}>
                        {heading2}
                    </Typography>
                </Box>
            ))}
        </Box>
    </Box>
}

export default FormComponent