import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-bootstrap/Toast'

export default class Register extends React.Component {

  
    constructor(){
        super();
        this.state = {message: ''}
    }

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    // send register request POST using fetch

                    // change the route to view course
                    this.props.history.push("/viewcourse");
                    
                }}
                render={({ errors, status, touched }) => (
                    <>
                    
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                    </>
                )}
            />
        )
    }
}
