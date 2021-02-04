import React from 'react';
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';
import { withRouter } from 'react-router';
import {Formik,Form,Field} from 'formik';
import *as Yup from 'yup';
import backgroundImage from './images/backgroundImage.png';

const LoginSchema=Yup.object().shape({
    username:Yup.string()
            .min(2,'Tooo  short')
            .max(10,'Too long')
            .required('Required'),
    password:Yup.string()
                .min(2,'Too short')
                .max(10,'Too long')
                .required('Required')
})
class Login extends React.Component {
  
    onSubmit =(values)=>{           
            let usname=values.username;
            let pwd=values.password;
            
            FrontEndController.login(usname,pwd)
            .then(response=>{
                //swal("login success",response.data.message,"success")
                this.props.history.push("/home");
            })
            .catch(error=>{
                console.log(error)
                swal("login failed","u provided invalid message","error");
            })}



    render() {
        return (
            <div className="container" id="containerId">
               

                <div className="row">
                    <div className="col-4"> </div>
                    <div className="col-4">
                       
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                       <Formik
                            initialValues={{
                                username:"",
                                password:""
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={this.onSubmit}
                        >
                            {({errors,touched})=>(
                            <Form>
                                <div className="jumbotron" id="jumbotronId">
                                    <h5 >Please login here!!</h5>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">UserName</label>
                                            <Field name="username" />
                                                {errors.username?<div>{errors.username}</div>:null}
                                    </div>
                                    <div className="form-group">
                                        <label for="">Password</label>
                                        <Field name="password" type="password" />
                                        {errors.password?<div>{errors.password}</div>:null}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </Form>
                            )}

                        </Formik>
                        
                        <div className="col-4"></div>
                    </div>
                </div>
              
            </div>            
        );
    }
}

export default withRouter(Login) ;