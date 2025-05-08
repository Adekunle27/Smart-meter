import React from "react";
import styled from "styled-components";
import { FiSettings, FiHome, FiZap } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { RiStarOffFill } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

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

// const NavItem = styled.div`
//   padding: 0.8rem 1rem;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   background: ${(props) => (props.active ? "#2c62f6" : "transparent")};
//   color: ${(props) => (props.active ? "white" : "#333")};
//   margin-bottom: 1rem;
//   cursor: pointer;
// `;

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

const Main = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: flex-end;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SummaryCards = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  flex: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

// const ChartsSection = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 1rem;
// `;

const UsageChart = styled.div`
  background: white;
  border-radius: 10px;
  padding: 0.1rem 1rem 1rem 1rem;
  margin-bottom: 1rem;
  height: 17rem;

  h4 {
    text-align: left;
    font-weight: 600;
    color: #4a5164;
    margin-bottom: 2rem; /* optional: gives space between title and chart */
  }
`;

const PredictionAndPower = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const Prediction = styled.div`
  background: white;
  border-radius: 10px;
  padding: 0.1rem 1rem 1rem 1rem;
  flex: 1;
  max-height: 16rem;
  // margin-bottom: 0.75rem;

  h4 {
    text-align: left;
    font-weight: 600;
    color: #4a5164;
    margin-bottom: 1.3rem;
  }
`;

const Appliances = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  flex: 1;
  max-height: 16rem;

  h4 {
    text-align: left;
    font-weight: 600;
    color: #4a5164;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const ApplianceItem = styled.li`
  margin-bottom: 1rem;

  .label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 0.9rem;
  }

  .energy {
    font-size: 0.75rem;
    color: #999;
    margin-top: 0.25rem;
    display: block;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 0.2rem;

  &::before {
    content: "";
    display: flex;
    width: 100%;
    max-width: 140px;
    height: 8px;
    background: ${({ percent }) => `
      repeating-linear-gradient(
        to right,
        #2E6BE9 0%,
rgb(74, 130, 241) ${percent}%,
        #e0e0e0 ${percent}%,
        #e0e0e0 100%
      )
    `};
    border-radius: 4px;
  }
`;

const Voltage = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  flex: 1;
  max-height: 16rem;
  text-align: center;
  position: relative;

  h4 {
    text-align: left;
    font-weight: 600;
    color: #4a5164;
    margin-bottom: 1rem;
  }

  .chart-wrapper {
    position: relative;
    width: 200px;
    height: 120px;
    margin: 0 auto;
  }

  .center-label {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
  }

  .quality {
    margin-top: 0.5rem;
    font-weight: 500;
    color: #777;
  }
`;

const data = [{ value: 85 }, { value: 15 }];

const COLORS = ["#e74c3c", "#e0e0e0"];

const PowerTip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-top: 0.588rem;
  padding: 0.2rem 1rem 0.78rem 1rem;
  background: rgb(221, 226, 248);
  border-radius: 10px;
  font-size: 0.9rem;

  h4 {
    text-align: left;
    font-weight: 600;
    color: #2e6be9;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.9rem;
    color: #333;
    margin-top: -0.085rem;
    margin-bottom: 0.1rem;
  }
`;

const Fonthead = styled.h2`
  font-size: 1.1rem;
  fornt-weight: 600;
  color: #4a5164;
`;
const Fontsub = styled.p`
  font-size: 1.5rem;
  color: #121212;
  font-weight: 500;
`;

const Align = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
`;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Break = styled.div`
  display: flex;
  // flex-direction: column;
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

const Dashboard = () => {
  const powerUsageData = [
    { name: "Jan", value: 300 },
    { name: "Feb", value: 600 },
    { name: "Mar", value: 550 },
    { name: "Apr", value: 720 },
    { name: "May", value: 710 },
    { name: "Jun", value: 500 },
    { name: "Jul", value: 800 },
    { name: "Aug", value: 900 },
    { name: "Sep", value: 1000 },
    { name: "Oct", value: 850 },
    { name: "Nov", value: 700 },
    { name: "Dec", value: 700 },
  ];
  const usagePredictData = [
    { name: "", value: 0 },
    { name: "", value: 100 },
    { name: "", value: 250 },
    { name: "", value: 290 },
    { name: "", value: 400 },
    { name: "", value: 500 },
  ];

  const location = useLocation();

  return (
    <Container>
      <Sidebar>
        <Logo>⚡ OAKPARK POWER</Logo>
        <Nav>
          <NavItem to="/" $active={location.pathname === "/"}>
            <FiHome /> Dashboard
          </NavItem>
          <NavItem to="/buy-power" $active={location.pathname === "/buy-power"}>
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

        <SummaryCards>
          <Card>
            <Fonthead>Power Used</Fonthead>
            <Fontsub>100.80W/units</Fontsub>
            <Align>
              <FaArrowTrendUp style={{ color: "green" }} />{" "}
              <small style={{ color: "green" }}>+2.11% in the last year</small>
            </Align>
          </Card>
          <Card>
            <Fonthead>Instantaneous Cost</Fonthead>
            <Fontsub>150,000.4 Naira</Fontsub>
            <Align>
              <FaArrowTrendUp style={{ color: "green" }} />{" "}
              <small style={{ color: "green" }}>+2.11% in the last year</small>
            </Align>
          </Card>
          <Card>
            <Fonthead>Energy Consumed</Fonthead>
            <Fontsub>0.07 kWh</Fontsub>
            <Align>
              <FaArrowTrendUp style={{ color: "green" }} />{" "}
              <small style={{ color: "green" }}>+2.11% in the last year</small>
            </Align>
          </Card>
          <Card>
            <Fonthead>Energy Balance</Fonthead>
            <Fontsub>99.93 kWh</Fontsub>
          </Card>
        </SummaryCards>

        <UsageChart>
          <h4>Power Usage</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={powerUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#007bff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </UsageChart>

        <PredictionAndPower>
          <Prediction>
            <h4>Usage Prediction</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={usagePredictData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#28a745"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Prediction>

          <Appliances>
            <h4>Active Appliances</h4>
            <ul>
              <ApplianceItem>
                <div className="label">
                  <span>Heating & AC - 1.47kWh</span>
                  <span>50%</span>
                </div>
                <ProgressBar percent={50} />
              </ApplianceItem>

              <ApplianceItem>
                <div className="label">
                  <span>Lighting - 1.47kWh</span>
                  <span>25%</span>
                </div>
                <ProgressBar percent={25} />
              </ApplianceItem>

              <ApplianceItem>
                <div className="label">
                  <span>Others - 1.47kWh</span>
                  <span>10%</span>
                </div>
                <ProgressBar percent={10} />
              </ApplianceItem>
            </ul>
          </Appliances>

          <Voltage>
            <h4>Voltage & Power Quality</h4>
            <div className="chart-wrapper">
              <PieChart width={200} height={120}>
                <Pie
                  data={data}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="center-label">560V</div>
            </div>
            <div className="quality">Medium</div>
          </Voltage>
        </PredictionAndPower>

        <PowerTip>
          <h4>
            <span>
              <RiStarOffFill />{" "}
            </span>
            Power Tip
          </h4>
          <p style={{ fontSize: "0.9rem", color: "#333" }}>
            Turn off your lights before you leave your house{" "}
          </p>
        </PowerTip>
      </Main>
    </Container>
  );
};

export default Dashboard;
