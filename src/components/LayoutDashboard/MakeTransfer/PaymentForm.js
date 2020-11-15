import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function PaymentForm({ dataTransfer, setDataTransfer }) {
  const ChangeDataTransfer = (e) => {
    setDataTransfer({ ...dataTransfer, [e.target.name]: e.target.value });
  };
  return (
    <React.Fragment>
      <Typography component={'div'} variant="h6" gutterBottom>
        Metodo de pago
      </Typography>
      <Grid container spacing={3}>
      
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numero de cuenta"
            fullWidth
            //value={dataTransfer}
            name="cuentareceptora"
            autoComplete="cc-number"
            onChange={ChangeDataTransfer}
            inputProps={{
              maxLength: 14,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Monto"
            name="depositoOrTranferencia"
            //value={dataTransfer}
            fullWidth
            autoComplete="cc-exp"
            onChange={ChangeDataTransfer}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
