import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../../BranchManager/managerViewStudent.css';
import Navbar from '../../BranchManager/Navbar';
import Sidebar from '../adminSidebar';
import axios from 'axios';
import {Base} from './../../base';


const AdminAddVehicle = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getVehicleType, setVehicleType] = useState([]);


  useEffect(() => {
    getVehicleTypeState();

  }, []);

  const getVehicleTypeState = () => {
    axios
      .get(Base+"/vehicletype/showtype")
      .then(data => {
        setVehicleType(data.data);


      })
  }

  console.log(getVehicleType);

  const submit = e => {

    let regiNumner = e.target[0].value;
    let chacieNumber = e.target[4].value;
    let startingMilage = e.target[1].value;
    let status = 1;
    let addedDate= e.target[2].value;
    let branchName = sessionStorage.getItem('branchName');
    let vehicleType = e.target[3].value;
    let payedDate = e.target[6].value;
    let expireDate = e.target[7].value;
    let licencePayedDate = e.target[8].value;
    let licenceExpireDate = e.target[5].value;


    let data = {
      regiNumner,
      chacieNumber,
      startingMilage,
      addedDate,
      status,
      branchName,
      vehicleType,
      payedDate,
      expireDate,
      licencePayedDate,
      licenceExpireDate

    };
    console.log(data);

    postVehicle(data);

  }



  const postVehicle = (data) => {
    axios
      .post(Base+"/vehicle/addvehicle", data)
      .then(d => {
        console.log(d);
      })
  }

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Add Vehicle</h1>
              <p>{sessionStorage.getItem('branchName')} Branch</p>
            </div>
          </div>
          <center>
            <div className="charts__rightt">
              <div className="charts__right__title">
                <div>
                  <p>Basic Details</p>
                </div>
              </div>

              <form className="charts__rightt__cardss"

                onSubmit={e => {
                  e.preventDefault();
                  submit(e);
                }}

              >
                <div className="card-p">
                  <p className="text">Vehical No</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Vehical No" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Starting Mileage</p>
                  <input className="data" type="text" name="first_name" id="firstname" placeholder="Starting Mileage" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>

                <div className="card-p">
                  <p className="text">Register Date</p>
                  <input className="data" type="date" name="first_name" id="firstname" placeholder="Register Date" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>



                <div className="card-p">
                  <p className="text">Vehical type</p>

                  <select>
                    <option value="0"> Select Vehicle Type </option>
                    {
                      getVehicleType.map(d => (

                        <option key={d.typeId} value={d.typeName}> {d.typeName} </option>

                      ))}




                  </select>

                </div>


                <div className="card-p">
                  <p className="text">Chessis No</p>
                  <input className="data" type="text" Value="" name="first_name" id="firstname" placeholder="Chessis No" required />
                  {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
                  <div className="card-p" style={{ marginRight: "10px" }}>
                    <p className="text">License starting date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License starting date" required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                  <div className="card-p" style={{ marginLeft: "0px" }}>
                    <p className="text">License expire date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="License expire date" required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                </div>

                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>

                  <div className="card-p" style={{ marginRight: "10px" }}>
                    <p className="text">Insurance starting date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="Insurance starting date" required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                  <div className="card-p" style={{ marginLeft: "0px" }}>
                    <p className="text">Insurance expire date</p>
                    <input className="data" type="date" Value="" name="first_name" id="firstname" placeholder="Insurance expire date" required />
                    {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
                  </div>

                </div>


                <center>
                  <input type="submit" value="Add" className="update-btn" />
                  &nbsp;&nbsp;&nbsp;
                  <input type="Reset" value="Reset" className="reset1-btn" />
                </center>
              </form>
            </div>
          </center>
        </div>
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );

}

export default AdminAddVehicle;