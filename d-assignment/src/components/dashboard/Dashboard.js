import React from 'react';
import "./dashboard.css";
import { Grid } from '@mui/material';


const Dashboard = () => {
  return (
    <div style={{ overflowY: "scroll" }}>
      <div className='dashboard-content' style={{ height: "111vh" }}>
        <div className='products-div'>
          <Grid container spacing={2} >
            <Grid md={3} sm={6} xs={2}>
              <div className='product-card'>
                <div className='card-cover'>
                  <img src="" alt="" />
                  <div className='company-logo'>
                    <img src="" alt="" />
                  </div>
                </div>
                <div className='card-content'>
                  <div className='company-name'>
                    <h3>Super D Fabrics Ltd</h3>
                    <div className='address-qty'>
                      <p className='location'>Dhaka, Bangladesh </p>
                      <p className='min-order-qty'><span> . </span>min Qty: 500 </p>
                    </div>
                    <div className='products-group'>
                      <p>Hoodies, Trousers, Jackets, Hoodies ..</p>
                    </div>
                  </div>
                  <div className='c-details'>
                    <button className='view-details'>View details</button>
                  </div>
                </div>
              </div>
            </Grid>

          </Grid>

        </div>

      </div>
    </div>
  )
}

export default Dashboard;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            