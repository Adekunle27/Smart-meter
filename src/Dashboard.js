import React from "react";
import styled from "styled-components";
import { FaBell, FaPowerOff } from "react-icons/fa";
import { FiSettings, FiHome, FiZap, FiBarChart2 } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

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

const NavItem = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${(props) => (props.active ? "#2c62f6" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#333")};
  margin-bottom: 1rem;
  cursor: pointer;
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

const ChartsSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;

const UsageChart = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  height: 200px;
`;

const PredictionAndPower = styled.div`
  display: flex;
  gap: 1rem;
`;

const Prediction = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  flex: 1;
  height: 180px;
`;

const Appliances = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  flex: 1;
`;

const Voltage = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  height: 180px;
`;

const PowerTip = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #edf0fe;
  border-radius: 10px;
  font-size: 0.9rem;
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

const Headunder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p>{label}</p>
        <p>{`Usage: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

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

  return (
    <Container>
      <Sidebar>
        <Logo>⚡ OAKPARK POWER</Logo>
        <Nav>
          <NavItem active>
            <FiHome /> Dashboard
          </NavItem>
          <NavItem>
            <FiZap /> Buy Power
          </NavItem>
          <NavItem>
            <FiSettings /> Settings
          </NavItem>
          <NavItem>
            <MdOutlineNotificationsNone /> Notifications{" "}
            <span
              style={{
                marginLeft: "auto",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "0 6px",
                fontSize: "0.7rem",
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
          <div>
            <h3>In The Last Year</h3>
          </div>
          <div>
            <strong>Adetunji Adebayo</strong>
            <br />
            <small>Meter No: 12333243423</small>
          </div>
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
            <Fontsub>150000.4 Naira</Fontsub>
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
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={powerUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />

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
            {/* Add usage prediction chart here */}
          </Prediction>
          <Appliances>
            <h4>Active Appliances</h4>
            <ul>
              <li>Heating & AC - 50%</li>
              <li>Lighting - 25%</li>
              <li>Others - 10%</li>
            </ul>
          </Appliances>
          <Voltage>
            <h4>Voltage & Power Quality</h4>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>560V</p>
            <p>Medium</p>
          </Voltage>
        </PredictionAndPower>

        <PowerTip>
          ✪ Power Tip: Turn off your lights before you leave your house
        </PowerTip>
      </Main>
    </Container>
  );
};

export default Dashboard;
