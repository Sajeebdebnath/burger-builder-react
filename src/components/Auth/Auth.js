import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../redux/actions/AuthActions";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Formik } from "formik";
import "../Auth/Auth.css";


const mapDispatchToProps = (dispatch) =>{
    return {
      auth : (email, password, switchUser) => dispatch(auth(email, password, switchUser))
    }
  }

const Auth = (props) => {
  const [switchUser, setSwitchUser] = useState(false);

  console.log(switchUser)
  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ size: "6", offset: "3" }}>
          <div className="auth-form-design">
            <Button
              onClick={() => setSwitchUser(!switchUser)}
              className="switch-button"
            >
              Switch to {switchUser ? "Login" : "Register"}{" "}
            </Button>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validate={values => {
                  const errors = {}

                  if(!values.email){
                      errors.email = "Email Address Required"
                  }
                  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email = "Invalid email address"
                  }

                  if(!values.password){
                    errors.password = "Password Required"
                }else if (values.password.length < 6){
                    errors.password = "Password length must be 6."
                }


                 if(switchUser){
                    if(!values.confirmPassword){
                        errors.confirmPassword = "Confirm Password Required"
                    }else if (values.confirmPassword !== values.password){
                        errors.confirmPassword = "Password does not match, try again!"
                    }
                 }

                return errors;
                
              }}
              onSubmit={values => {
                  props.auth(values.email, values.password, switchUser)
              }}
            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <p className="text-danger">{errors.email}</p>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <p className="text-danger">{errors.password}</p>
                  </FormGroup>
                  {switchUser && (
                    <FormGroup>
                      <Input
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                      />
                      <p className="text-danger">{errors.confirmPassword}</p>
                    </FormGroup>
                  )}

                  <Button type="submit" color="success">
                    {switchUser ? "Register" : "Login"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(Auth);
