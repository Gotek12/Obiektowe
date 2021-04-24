import React from "react";
import "./AddProduct.css";
import {
  TextField,
  Button,
  InputAdornment,
  FilledInput,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

export class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
    };
  }

  render() {
    const paperStyle = {
      height: "35vh",
      width: "35vh",
      outlineColor: "blue",
    };

    const handleadd = (e) => {
      e.preventDefault();
      window.location.reload();

      //mechanizm wysyłający zapytanie do servera
      console.log(
        this.state.name + " " + this.state.description + " " + this.state.price
      );
    };

    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({
        [name]: value,
      });
    };

    return (
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
        <Card style={paperStyle} variant="outlined">
          <CardContent>
            <Typography variant="h5">Add product</Typography>
            <form method="POST" onSubmit={handleadd}>
              <TextField
                id="name"
                type="text"
                label="Name"
                placeholder="Name"
                margin="normal"
                variant="filled"
                name="name"
                fullWidth
                onChange={handleChange}
                value={this.state.nameProduct}
              />
              <TextField
                id="description"
                type="text"
                label="Description"
                placeholder="Description"
                margin="normal"
                variant="filled"
                name="description"
                fullWidth
                onChange={handleChange}
                value={this.state.description}
              />
              <FormControl fullWidth variant="filled" margin="normal">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Price
                </InputLabel>
                <FilledInput
                  polaceholder="Price"
                  name="price"
                  id="price"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  onChange={handleChange}
                  value={this.state.price}
                />
              </FormControl>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                size="large"
              >
                <span className="btn-login-txt">Add</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
