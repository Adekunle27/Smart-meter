// import React, { useState } from "react";
// import styled from "styled-components";
// import { FiSettings, FiHome, FiZap } from "react-icons/fi";
// import { TbLogout } from "react-icons/tb";
// import { MdOutlineNotificationsNone } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import PageWrapper from "./PageWrapper";

// const Container = styled.div`
//   display: flex;
//   font-family: "Segoe UI", sans-serif;
//   background: #f8f9fc;
//   height: 100vh;
// `;

// const Sidebar = styled.div`
//   width: 250px;
//   background: white;
//   border-right: 1px solid #e5e5e5;
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
// `;

// const Logo = styled.h2`
//   font-weight: bold;
//   font-size: 1.3rem;
//   margin-bottom: 2rem;
// `;

// const Nav = styled.nav`
//   flex: 1;
// `;

// const NavItem = styled(Link)`
//   text-decoration: none;
//   padding: 0.8rem 1rem;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   background: ${(props) => (props.$active ? "#2c62f6" : "transparent")};
//   color: ${(props) => (props.$active ? "white" : "#333")};
//   margin-bottom: 1rem;
//   cursor: pointer;

//   &:hover {
//     background: rgb(79, 123, 243);
//     color: ${(props) => (props.$active ? "white" : "#333")};
//   }
// `;

// const Main = styled.div`
//   flex: 1;
//   padding: 1.5rem;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1.5rem;
// `;

// const DashboardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
// `;

// const Break = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const Belowbreak = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const BreakImage = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 0.5rem;
//   img {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     object-fit: cover;
//   }
//   strong {
//   }
// `;

// const StyledSelect = styled.select`
//   padding: 0.6rem 1rem;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   background-color: #fff;
//   color: #333;
//   font-size: 0.95rem;
//   outline: none;
//   cursor: pointer;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//   transition: border 0.2s ease, box-shadow 0.2s ease;

//   &:hover {
//     border-color: #888;
//   }

//   &:focus {
//     border-color: #007bff;
//     box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
//   }

//   option {
//     padding: 0.5rem;
//   }
// `;

// const Tabs = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 1.5rem;
//   border-bottom: 2px solid #e5e5e5;
// `;

// const Tab = styled.button`
//   padding: 0.5rem 1rem;
//   border: none;
//   background: none;
//   cursor: pointer;
//   color: ${(props) => (props.$active ? "#2c62f6" : "#333")};
//   border-bottom: ${(props) => (props.$active ? "2px solid #2c62f6" : "none")};
//   font-weight: ${(props) => (props.$active ? "bold" : "normal")};

//   &:hover {
//     color: #2c62f6;
//   }
// `;

// const TabContent = styled.div`
//   padding: 1rem;
//   border: 1px solid #e5e5e5;
//   border-radius: 8px;
// `;

// const ProfileSettings = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   gap: 2rem;
//   margin-top: 4rem;
//   padding: 5rem 1rem 5rem 1rem;
//   border: 1px solid #e5e5e5;

//   label {
//     font-size: 0.9rem;
//     color: #333;
//     font-weight: 500;
//     text-align: left;
//   }

//   input,
//   select {
//     padding: 0.6rem;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     font-size: 0.9rem;
//     width: 30rem;
//     background: #ebecf0;
//   }

//   .middle-section {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;

//     button {
//       padding: 0.6rem 1.5rem;
//       background: #2c62f6;
//       color: white;
//       border: none;
//       border-radius: 4px;
//       cursor: pointer;
//       grid-column: 2;
//       margin-top: 1rem;
//       width: fit-content;
//     }
//   }
//   .right-section {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }

//   img {
//     width: 175px;
//     height: 175px;
//     border-radius: 50%;
//     object-fit: cover;
//     margin-bottom: 1rem;
//   }

//   .upload-section {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 0.5rem;
//     margin-bottom: 2rem;

//     label {
//       font-size: 0.9rem;
//       color: #666;
//     }

//     input[type="file"] {
//       padding: 0.5rem;
//       border: 1px solid #ccc;
//       border-radius: 4px;
//       cursor: pointer;
//     }

//     small {
//       font-size: 0.75rem;
//       color: #888;
//     }
//   }
// `;

// const ChangePassword = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 2fr;
//   gap: 0.5rem 1rem;
//   align-items: center;
//   margin-top: 2rem;
//   padding: 1rem;
//   border: 1px solid #e5e5e5;
//   border-radius: 8px;

//   label {
//     font-size: 0.9rem;
//     color: #333;
//     font-weight: 500;
//   }

//   input {
//     padding: 0.6rem;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     font-size: 0.9rem;
//     width: 100%;
//   }

//   button {
//     padding: 0.6rem 1.5rem;
//     background: #2c62f6;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     grid-column: 2;
//     margin-top: 1rem;
//     width: fit-content;

//     &:hover {
//       background: rgb(79, 123, 243);
//     }
//   }
// `;

// const Notification = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.8rem 1rem;
//   margin-top: auto;
// `;

// const Logout = styled.button`
//   padding: 0.6rem 1rem;
//   background: none;
//   border: none;
//   color: #d33;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// const BillingInformation = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const BillingDetails = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1rem;
// `;

// const BillingCard = styled.div`
//   padding: 1rem;
//   border: 1px solid #e5e5e5;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 0.5rem;

//   .detail-top {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     h3 {
//       color: #12131e;
//       font-size: 1.2rem;
//       font-weight: 450;
//     }
//   }

//   .details-bottom {
//     display: flex;
//     // flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     gap: 0.5rem;
//     font-size: 0.9rem;
//     color: #666;

//     p {
//       margin: 0;
//     }
//   }

//   h3 {
//     font-size: 1rem;
//     font-weight: 600;
//     margin-bottom: 0.5rem;
//   }

//   p {
//     font-size: 0.9rem;
//     color: #666;
//   }

//   button {
//     padding: 0.5rem 1rem;
//     background: #2c62f6;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     align-self: flex-end;

//     &:hover {
//       background: rgb(79, 123, 243);
//     }
//   }
// `;

// const PaymentCard = styled.div`
//   padding: 1rem;
//   border: 1px solid #e5e5e5;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   .payment-top {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 1rem;

//     h3 {
//       color: #12131e;
//       font-size: 1.2rem;
//       font-weight: 450;
//     }
//   }

//   .credit-card {
//     background-color: rgb(192, 52, 47);
//     color: #a1a1aa;
//     padding: 30px 30px;
//     border-radius: 0.5rem;
//     box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
//       0 8px 10px -6px rgb(0 0 0 / 0.1);
//     width: 450px;
//     height: 250px;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s ease-in-out;
//   }

//   .credit-card:hover {
//     scale: 1.1;
//   }

//   .head,
//   .number,
//   .tail {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-weight: 600;
//     z-index: 10;
//   }

//   .head {
//     font-size: 1.3rem;
//     font-weight: bold;
//   }

//   .number {
//     margin-top: auto;
//     font-size: 2.1rem;
//     font-weight: bold;
//     margin-bottom: 0.3rem;
//     color: #d4d4d8;
//   }

//   .exp {
//     font-size: 0.8rem;
//   }

//   .exp-date {
//     color: #d4d4d8;
//     font-size: 1.3rem;
//   }

//   .circle1 {
//     position: absolute;
//     width: 250px;
//     height: 250px;
//     background-color: #991b1b;
//     border-radius: 100%;
//     transform: translateY(-60%) translateX(100%);
//   }

//   .circle2 {
//     position: absolute;
//     width: 100px;
//     height: 100px;
//     background-color: #854d0e;
//     border-radius: 100%;
//     transform: translateY(190%);
//   }

//   h3 {
//     font-size: 1rem;
//     font-weight: 600;
//     margin-bottom: 0.5rem;
//   }

//   p {
//     font-size: 0.9rem;
//     color: #666;
//   }

//   div {
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//   }

//   button {
//     padding: 0.5rem 1rem;
//     background: #2c62f6;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     align-self: flex-end;

//     &:hover {
//       background: rgb(79, 123, 243);
//     }
//   }
// `;

// const BillingHistory = styled.div`
//   margin-top: 1rem;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   font-size: 0.9rem;

//   th,
//   td {
//     padding: 0.75rem;
//     text-align: left;
//     border-bottom: 1px solid #e5e5e5;
//   }

//   th {
//     font-weight: 600;
//     color: #333;
//     text-transform: uppercase;
//     font-size: 0.85rem;
//   }

//   td {
//     color: #666;
//   }

//   .status {
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;

//     &::before {
//       content: "";
//       width: 8px;
//       height: 8px;
//       border-radius: 50%;
//       background: #28a745;
//     }
//   }

//   .view-invoice {
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     color: #2c62f6;
//     cursor: pointer;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Settings = () => {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState("Profile Settings");

//   const tabs = [
//     "Profile Settings",
//     "Billing Information",
//     "Energy Profile",
//     "Power Settings",
//   ];

//   const billingHistoryData = [
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//     {
//       invoiceNumber: "Invoice 234",
//       amount: "₦25000",
//       status: "Successful",
//       date: "25th Apr, 2025",
//     },
//   ];

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Profile Settings":
//         return (
//           <ProfileSettings>
//             <div className="left-section">
//               <div className="upload-section">
//                 <img
//                   src="https://i.ibb.co/3VdzBmk/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
//                   alt="Profile"
//                 />
//                 <label>Upload New Photo</label>
//                 <input type="file" accept="image/jpeg,image/png" />
//                 <small>
//                   At least 800px x 800px recommended. JPG or PNG is allowed.
//                 </small>
//                 <ChangePassword>
//                   <label>Old Password</label>
//                   <input type="password" />
//                   <label>New Password</label>
//                   <input type="password" />
//                   <button>Save New Password</button>
//                 </ChangePassword>
//               </div>
//             </div>
//             <div className="middle-section">
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 defaultValue="Adetunji Adebayo"
//                 placeholder="Your Full Name here"
//               />
//               <label>Meter Number</label>
//               <input
//                 type="text"
//                 defaultValue="4569 - 3345 - 568"
//                 placeholder="Your Meter Number"
//               />

//               <label>Country</label>
//               <select defaultValue="Nigeria">
//                 <option value="Nigeria">Nigeria</option>
//                 <option value="Ghana">Ghana</option>
//               </select>
//               <label>Address</label>
//               <input
//                 type="text"
//                 defaultValue="No. 2, Park Avenue, Ile-Ife"
//                 placeholder="Your Address here"
//               />
//               <button>Update</button>
//             </div>
//             <div className="right-section">
//               <label>Email Address</label>
//               <input
//                 type="email"
//                 defaultValue="adetunjiadebayo@gmail.com"
//                 placeholder="Your email address"
//               />
//               <label>Phone Number</label>
//               <input
//                 type="phone"
//                 defaultValue="+2349047578939"
//                 placeholder="Your Phone number"
//               />
//               <label>State</label>
//               <select defaultValue="Osun">
//                 <option value="Osun">Osun</option>
//                 <option value="Lagos">Lagos</option>
//               </select>
//               <label>Zip Code</label>
//               <input type="text" defaultValue="090923" placeholder="ZIP code" />
//             </div>

//             <div className="details-section"></div>
//           </ProfileSettings>
//         );
//       case "Billing Information":
//         return (
//           <BillingInformation>
//             <BillingDetails>
//               <BillingCard>
//                 <div className="detail-top">
//                   <h3>Billing Details</h3>
//                   <button>Update</button>
//                 </div>

//                 <div className="details-bottom">
//                   <p>
//                     {" "}
//                     Billing Address <br></br> No. 2, Park Avenue, Ile-Ife, Osun
//                     State
//                   </p>
//                   <p>
//                     Next Billing Date <br></br> 20th April, 2025{" "}
//                   </p>
//                 </div>
//               </BillingCard>

//               <PaymentCard>
//                 <div className="payment-top">
//                   <h3>Payment Method</h3>
//                   <button>Update</button>
//                 </div>

//                 <div class="credit-card">
//                   <div class="circle1"></div>
//                   <div class="circle2"></div>
//                   <div class="head">
//                     <div>
//                       <i class="fa-solid fa-credit-card fa-2xl"></i>
//                     </div>
//                     <div>Credit Card</div>
//                   </div>
//                   <div class="number">
//                     <div>1234</div>
//                     <div>5678</div>
//                     <div>9123</div>
//                     <div>4567</div>
//                   </div>
//                   <div class="tail">
//                     <div>Adetunji Adebayo</div>
//                     <div class="exp">
//                       Exp:
//                       <span class="exp-date">12/26</span>
//                     </div>
//                   </div>
//                 </div>
//               </PaymentCard>
//             </BillingDetails>
//             <BillingHistory>
//               <h3>Billing History</h3>
//               <Table>
//                 <thead>
//                   <tr>
//                     <th>Invoice Number</th>
//                     <th>Amount Paid</th>
//                     <th>Status</th>
//                     <th>Transaction Date</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {billingHistoryData.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.invoiceNumber}</td>
//                       <td>{item.amount}</td>
//                       <td className="status background">{item.status}</td>
//                       <td>{item.date}</td>
//                       <td className="view-invoice">
//                         View Invoice <IoIosArrowForward />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </BillingHistory>
//           </BillingInformation>
//         );
//       case "Energy Profile":
//         return <TabContent>Energy Profile content goes here.</TabContent>;
//       case "Power Settings":
//         return <TabContent>Power Settings content goes here.</TabContent>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <PageWrapper>
//       <Container>
//         <Sidebar>
//           <Logo>⚡ OAKPARK POWER</Logo>
//           <Nav>
//             <NavItem to="/" $active={location.pathname === "/"}>
//               <FiHome /> Dashboard
//             </NavItem>
//             <NavItem
//               to="/buy-power"
//               $active={location.pathname === "/buy-power"}
//             >
//               <FiZap /> Buy Power
//             </NavItem>
//             <NavItem to="/settings" $active={location.pathname === "/settings"}>
//               <FiSettings /> Settings
//             </NavItem>
//             <NavItem
//               to="/notifications"
//               $active={location.pathname === "/notifications"}
//             >
//               <MdOutlineNotificationsNone /> Notifications{" "}
//               <span
//                 style={{
//                   marginLeft: "auto",
//                   background: "red",
//                   color: "white",
//                   borderRadius: "50%",
//                   padding: "1.7px 5px",
//                   fontSize: "0.8rem",
//                 }}
//               >
//                 2
//               </span>
//             </NavItem>
//           </Nav>
//           <Notification>
//             <Logout>
//               <TbLogout /> Log out
//             </Logout>
//           </Notification>
//         </Sidebar>

//         <Main>
//           <Header>
//             <div>Hello, Adetunji Adebayo</div>

//             <DashboardContainer>
//               <div>
//                 <StyledSelect name="durations">
//                   <option value="lastyear">In The Last Year</option>
//                   <option value="7days">In The Last 7 Days</option>
//                   <option value="30days">In The Last 30 Days</option>
//                   <option value="4months">In The Last 4 Months</option>
//                 </StyledSelect>
//               </div>

//               <Break>
//                 <BreakImage>
//                   <img
//                     src="https://i.ibb.co/3VdzBmk/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
//                     alt="Profile"
//                   />
//                 </BreakImage>
//                 <Belowbreak>
//                   <strong>Adetunji Adebayo</strong>
//                   <small>Meter No: 12333243423</small>
//                 </Belowbreak>
//               </Break>
//               <br />
//             </DashboardContainer>
//           </Header>
//           <Tabs>
//             {tabs.map((tab) => (
//               <Tab
//                 key={tab}
//                 $active={activeTab === tab}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </Tab>
//             ))}
//           </Tabs>
//           {renderTabContent()}
//         </Main>
//       </Container>
//     </PageWrapper>
//   );
// };

// export default Settings;

import React, { useState } from "react";
import styled from "styled-components";
import { FiSettings, FiHome, FiZap } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion"; // Import framer-motion

const Container = styled.div`
  display: flex;
  font-family: "Segoe UI", sans-serif;
  background: #f8f9fc;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: white;
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Logo = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${(props) => (props.$active ? "#2c62f6" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background: rgb(79, 123, 243);
    color: ${(props) => (props.$active ? "white" : "#333")};
  }
`;

const Main = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Break = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Belowbreak = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const BreakImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  strong {
  }
`;

const StyledSelect = styled.select`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }

  option {
    padding: 0.5rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e5e5e5;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#2c62f6" : "#333")};
  border-bottom: ${(props) => (props.$active ? "2px solid #2c62f6" : "none")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};

  &:hover {
    color: #2c62f6;
  }
`;

const TabContent = styled(motion.div)`
  // Wrap TabContent with motion.div
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
`;

const ProfileSettings = styled(motion.div)`
  // Wrap ProfileSettings with motion.div
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 4rem;
  padding: 5rem 1rem 5rem 1rem;
  border: 1px solid #e5e5e5;

  label {
    font-size: 0.9rem;
    color: #333;
    font-weight: 500;
    text-align: left;
  }

  input,
  select {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
    width: 30rem;
    background: #ebecf0;
  }

  .middle-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      padding: 0.6rem 1.5rem;
      background: #2c62f6;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      grid-column: 2;
      margin-top: 1rem;
      width: fit-content;
    }
  }
  .right-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .upload-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;

    label {
      font-size: 0.9rem;
      color: #666;
    }

    input[type="file"] {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
    }

    small {
      font-size: 0.75rem;
      color: #888;
    }
  }
`;

const ChangePassword = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem 1rem;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;

  label {
    font-size: 0.9rem;
    color: #333;
    font-weight: 500;
  }

  input {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
    width: 100%;
  }

  button {
    padding: 0.6rem 1.5rem;
    background: #2c62f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    grid-column: 2;
    margin-top: 1rem;
    width: fit-content;

    &:hover {
      background: rgb(79, 123, 243);
    }
  }
`;

const Notification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  margin-top: auto;
`;

const Logout = styled.button`
  padding: 0.6rem 1rem;
  background: none;
  border: none;
  color: #d33;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BillingInformation = styled(motion.div)`
  // Wrap BillingInformation with motion.div
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BillingDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const BillingCard = styled.div`
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  .detail-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: #12131e;
      font-size: 1.2rem;
      font-weight: 450;
    }
  }

  .details-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #666;

    p {
      margin: 0;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }

  button {
    padding: 0.5rem 1rem;
    background: #2c62f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;

    &:hover {
      background: rgb(79, 123, 243);
    }
  }
`;

const PaymentCard = styled.div`
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .payment-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      color: #12131e;
      font-size: 1.2rem;
      font-weight: 450;
    }
  }

  .credit-card {
    background-color: rgb(192, 52, 47);
    color: #a1a1aa;
    padding: 30px 30px;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    width: 450px;
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .credit-card:hover {
    scale: 1.1;
  }

  .head,
  .number,
  .tail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    z-index: 10;
  }

  .head {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .number {
    margin-top: auto;
    font-size: 2.1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #d4d4d8;
  }

  .exp {
    font-size: 0.8rem;
  }

  .exp-date {
    color: #d4d4d8;
    font-size: 1.3rem;
  }

  .circle1 {
    position: absolute;
    width: 250px;
    height: 250px;
    background-color: #991b1b;
    border-radius: 100%;
    transform: translateY(-60%) translateX(100%);
  }

  .circle2 {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #854d0e;
    border-radius: 100%;
    transform: translateY(190%);
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    background: #2c62f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;

    &:hover {
      background: rgb(79, 123, 243);
    }
  }
`;

const BillingHistory = styled.div`
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
  }

  th {
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    font-size: 0.85rem;
  }

  td {
    color: #666;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #28a745;
    }
  }

  .view-invoice {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #2c62f6;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Animation variants for the tab content
const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Settings = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Profile Settings");

  const tabs = [
    "Profile Settings",
    "Billing Information",
    "Energy Profile",
    "Power Settings",
  ];

  const billingHistoryData = [
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
    {
      invoiceNumber: "Invoice 234",
      amount: "₦25000",
      status: "Successful",
      date: "25th Apr, 2025",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile Settings":
        return (
          <ProfileSettings
            key={activeTab} // Key ensures animation triggers on tab change
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="left-section">
              <div className="upload-section">
                <img
                  src="https://i.ibb.co/3VdzBmk/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
                  alt="Profile"
                />
                <label>Upload New Photo</label>
                <input type="file" accept="image/jpeg,image/png" />
                <small>
                  At least 800px x 800px recommended. JPG or PNG is allowed.
                </small>
                <ChangePassword>
                  <label>Old Password</label>
                  <input type="password" />
                  <label>New Password</label>
                  <input type="password" />
                  <button>Save New Password</button>
                </ChangePassword>
              </div>
            </div>
            <div className="middle-section">
              <label>Full Name</label>
              <input
                type="text"
                defaultValue="Adetunji Adebayo"
                placeholder="Your Full Name here"
              />
              <label>Meter Number</label>
              <input
                type="text"
                defaultValue="4569 - 3345 - 568"
                placeholder="Your Meter Number"
              />
              <label>Country</label>
              <select defaultValue="Nigeria">
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
              </select>
              <label>Address</label>
              <input
                type="text"
                defaultValue="No. 2, Park Avenue, Ile-Ife"
                placeholder="Your Address here"
              />
              <button>Update</button>
            </div>
            <div className="right-section">
              <label>Email Address</label>
              <input
                type="email"
                defaultValue="adetunjiadebayo@gmail.com"
                placeholder="Your email address"
              />
              <label>Phone Number</label>
              <input
                type="phone"
                defaultValue="+2349047578939"
                placeholder="Your Phone number"
              />
              <label>State</label>
              <select defaultValue="Osun">
                <option value="Osun">Osun</option>
                <option value="Lagos">Lagos</option>
              </select>
              <label>Zip Code</label>
              <input type="text" defaultValue="090923" placeholder="ZIP code" />
            </div>
          </ProfileSettings>
        );
      case "Billing Information":
        return (
          <BillingInformation
            key={activeTab} // Key ensures animation triggers on tab change
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
          >
            <BillingDetails>
              <BillingCard>
                <div className="detail-top">
                  <h3>Billing Details</h3>
                  <button>Update</button>
                </div>
                <div className="details-bottom">
                  <p>
                    Billing Address <br /> No. 2, Park Avenue, Ile-Ife, Osun
                    State
                  </p>
                  <p>
                    Next Billing Date <br /> 20th April, 2025
                  </p>
                </div>
              </BillingCard>
              <PaymentCard>
                <div className="payment-top">
                  <h3>Payment Method</h3>
                  <button>Update</button>
                </div>
                <div className="credit-card">
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                  <div className="head">
                    <div>
                      <i className="fa-solid fa-credit-card fa-2xl"></i>
                    </div>
                    <div>Credit Card</div>
                  </div>
                  <div className="number">
                    <div>1234</div>
                    <div>5678</div>
                    <div>9123</div>
                    <div>4567</div>
                  </div>
                  <div className="tail">
                    <div>Adetunji Adebayo</div>
                    <div className="exp">
                      Exp: <span className="exp-date">12/26</span>
                    </div>
                  </div>
                </div>
              </PaymentCard>
            </BillingDetails>
            <BillingHistory>
              <h3>Billing History</h3>
              <Table>
                <thead>
                  <tr>
                    <th>Invoice Number</th>
                    <th>Amount Paid</th>
                    <th>Status</th>
                    <th>Transaction Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistoryData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.invoiceNumber}</td>
                      <td>{item.amount}</td>
                      <td className="status background">{item.status}</td>
                      <td>{item.date}</td>
                      <td className="view-invoice">
                        View Invoice <IoIosArrowForward />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </BillingHistory>
          </BillingInformation>
        );
      case "Energy Profile":
        return (
          <TabContent
            key={activeTab} // Key ensures animation triggers on tab change
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
          >
            Energy Profile content goes here.
          </TabContent>
        );
      case "Power Settings":
        return (
          <TabContent
            key={activeTab} // Key ensures animation triggers on tab change
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
          >
            Power Settings content goes here.
          </TabContent>
        );
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      <Container>
        <Sidebar>
          <Logo>⚡ OAKPARK POWER</Logo>
          <Nav>
            <NavItem to="/" $active={location.pathname === "/"}>
              <FiHome /> Dashboard
            </NavItem>
            <NavItem
              to="/buy-power"
              $active={location.pathname === "/buy-power"}
            >
              <FiZap /> Buy Power
            </NavItem>
            <NavItem to="/settings" $active={location.pathname === "/settings"}>
              <FiSettings /> Settings
            </NavItem>
            <NavItem
              to="/notifications"
              $active={location.pathname === "/notifications"}
            >
              <MdOutlineNotificationsNone /> Notifications{" "}
              <span
                style={{
                  marginLeft: "auto",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "1.7px 5px",
                  fontSize: "0.8rem",
                }}
              >
                2
              </span>
            </NavItem>
          </Nav>
          <Notification>
            <Logout>
              <TbLogout /> Log out
            </Logout>
          </Notification>
        </Sidebar>

        <Main>
          <Header>
            <div>Hello, Adetunji Adebayo</div>
            <DashboardContainer>
              <div>
                <StyledSelect name="durations">
                  <option value="lastyear">In The Last Year</option>
                  <option value="7days">In The Last 7 Days</option>
                  <option value="30days">In The Last 30 Days</option>
                  <option value="4months">In The Last 4 Months</option>
                </StyledSelect>
              </div>
              <Break>
                <BreakImage>
                  <img
                    src="https://i.ibb.co/3VdzBmk/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
                    alt="Profile"
                  />
                </BreakImage>
                <Belowbreak>
                  <strong>Adetunji Adebayo</strong>
                  <small>Meter No: 12333243423</small>
                </Belowbreak>
              </Break>
              <br />
            </DashboardContainer>
          </Header>
          <Tabs>
            {tabs.map((tab) => (
              <Tab
                key={tab}
                $active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Tab>
            ))}
          </Tabs>
          {renderTabContent()}
        </Main>
      </Container>
    </PageWrapper>
  );
};

export default Settings;
