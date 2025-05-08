import React from "react";
import styled from "styled-components";
import { FiSettings, FiHome, FiZap } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";

import { Link, useLocation } from "react-router";

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

// const SummaryCards = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   margin-bottom: 1.5rem;
// `;

// const Card = styled.div`
//   background: white;
//   border-radius: 10px;
//   padding: 1rem;
//   flex: 1;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
// `;

// const ChartsSection = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 1rem;
// `;

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

const Notifications = () => {
  //   const powerUsageData = [
  //     { name: "Jan", value: 300 },
  //     { name: "Feb", value: 600 },
  //     { name: "Mar", value: 550 },
  //     { name: "Apr", value: 720 },
  //     { name: "May", value: 710 },
  //     { name: "Jun", value: 500 },
  //     { name: "Jul", value: 800 },
  //     { name: "Aug", value: 900 },
  //     { name: "Sep", value: 1000 },
  //     { name: "Oct", value: 850 },
  //     { name: "Nov", value: 700 },
  //     { name: "Dec", value: 700 },
  //   ];
  //   const usagePredictData = [
  //     { name: "", value: 0 },
  //     { name: "", value: 100 },
  //     { name: "", value: 250 },
  //     { name: "", value: 290 },
  //     { name: "", value: 400 },
  //     { name: "", value: 500 },
  //   ];

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
      </Main>
    </Container>
  );
};

export default Notifications;
