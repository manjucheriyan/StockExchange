import React from 'react';
import FrontEndController from './FrontEndController';
import { withRouter } from 'react-router';
import {Formik,Form} from 'formik';
import *as Yup from 'yup';

const ServiceCustomerSchema=Yup.object().shape({
    serviceCategory:Yup.string()
    
})
class UserHome extends React.Component {
  
    state = {
        providerObject:[],
        providerName:"",
        
    }


    handleChange = (event) => {
        this.setState({selectValue:event.target.value});
        let StockName = event.target.value
        if(StockName==="NA"){
            alert("Please Select a StockName to continue")
        }
        else{ 
            FrontEndController.getStockDetails(StockName)
        .then(data=>{
            this.setState({
                providerObject:data.data.stockArray
            });
        }); 
        }         
    }
   

    render() {

        return (
            <div className="container" >

                <div className="row">
                    <div className="col-4"> </div>
                    <div className="col-4">
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-18"></div>
                    <div className="col-18">
                       <Formik
                            initialValues={{
                                
                                serviceCategory:""
                            }}
                            validationSchema={ServiceCustomerSchema}
                            onSubmit={this.onSubmit}
                        >
                            {({errors,touched})=>(
                            <Form>
                                <div className="jumbotron" >
                                
                                <div>
                                    Company Name<select 
                                        value={this.state.selectValue} 
                                        onChange={this.handleChange} 
                                    >
                                        
                                        <option value="NA">Please Select</option>
                                        <option value="HDFC">HDFC</option>
                                        <option value="KALYAN">KALYAN</option>
                                        <option value="BASELIOS">BASELIOS</option>
                                        <option value="SBI">SBI</option>
                                    </select>
                                    <br></br> <br></br>
                                </div>

                                    <h2>Business Key Ratios</h2>
                                    <table class="table">
                                        <tr>
                                        <th>Stock Name</th>
                                        <th>Market Cap</th>
                                        <th>Current Market Price of stock</th>
                                        <th>Stock P/E</th>
                                        <th>Dividend Yield</th>
                                        <th>ROCE</th>
                                        <th>ROE</th>
                                        <th>Debt to equity</th>
                                        <th>EPS</th>
                                        <th>Reserves</th>
                                        <th>Debt</th>                                           
                                        </tr>                
                                            {
                                                this.state.providerObject.map(providerObject=><tr>                                                    
                                                    <td>{providerObject.StockName}</td>
                                                    <td>{providerObject.MarketCap}</td>
                                                    <td>{providerObject.CurrentMarketPriceofstock}</td>
                                                    <td>{providerObject.StockPE}</td>
                                                    <td>{providerObject.DividendYield}</td>
                                                    <td>{providerObject.ROCE}</td>
                                                    <td>{providerObject.ROE}</td>
                                                    <td>{providerObject.Debttoequity}</td>
                                                    <td>{providerObject.EPS}</td>
                                                    <td>{providerObject.Reserves}</td>
                                                    <td>{providerObject.Debt}</td>                               
                                        </tr>)
                                            }                                    
                                    </table>                                    
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

export default withRouter(UserHome) ;