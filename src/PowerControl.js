import React from "react";
import styled from "styled-components";
import { FiSettings, FiHome, FiZap } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import PageWrapper from "./PageWrapper";
// import { motion, useInView } from "framer-motion"; // Import framer-motion and useInView
import { HiAdjustments } from "react-icons/hi";

const Container = styled.div`
  display: flex;
  font-family: "Segoe UI", sans-serif;
  background: #f8f9fc;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 310px;
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
`;

const StyledSelect = styled.select`
  padding: 0.6rem 2rem 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'); /* Increased arrow size to 16x16 */
  background-repeat: no-repeat;
  background-position: right 0.8rem center; /* Still fits with the padding */

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

// Animation variants for the notification cards

const Notifications = () => {
  const location = useLocation();

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
              to="/power-control"
              $active={location.pathname === "/power-control"}
            >
              <HiAdjustments /> Power Control
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

          <h2 style={{ textAlign: "left" }}>Power Control</h2>

          <PowerContainer>
            <PowerLeft>
              <h3 style={{ textAlign: "left" }}>Usage Goals</h3>
              <UsageGoal>
                <StyledSelect name="usage">
                  <option value="monthly">Set Usage Limit</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                </StyledSelect>
                <StyledSelect name="duration">
                  <option value="monthly">Duration</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                </StyledSelect>
                <StyledSelect name="measure">
                  <option value="price">Measure By</option>
                  <option value="price">By Price</option>
                  <option value="usage">By Usage</option>
                </StyledSelect>
              </UsageGoal>

              <NotificationThreshold>
                <NotUp>
                  <NotDiv>Notification Threshold</NotDiv>
                  <small style={{ alignItems: "flex-start" }}>
                    Send a notification when power usage meets this percentage
                  </small>
                </NotUp>

                <StyledSelect name="threshold">
                  <option value="90">90%</option>
                  <option value="80">80%</option>
                  <option value="70">70%</option>
                </StyledSelect>
              </NotificationThreshold>

              <Switch>
                <NotUp>
                  <NotDiv>
                    <label htmlFor="autoCutoff">Enable Automatic Cutoff</label>
                  </NotDiv>
                  <small>
                    This will turn off power the moment your goal is exceeded
                  </small>
                </NotUp>

                <SwitchInput type="checkbox" id="autoCutoff" />
                <span></span>
              </Switch>

              <Switch>
                <NotUp>
                  <NotDiv>
                    <label htmlFor="restorePower">Restore Power</label>
                  </NotDiv>
                  <small>
                    This will manually override cutoff settings and restore
                    power
                  </small>
                </NotUp>
                <SwitchInput type="checkbox" id="restorePower" />
                <span></span>
              </Switch>

              <Switch>
                <NotUp>
                  <NotDiv>
                    <label htmlFor="blackout">Blackout</label>
                  </NotDiv>
                  <small>
                    This will manually override cutoff settings and turn off
                    power
                  </small>
                </NotUp>
                <SwitchInput type="checkbox" id="blackout" />
                <span></span>
              </Switch>
            </PowerLeft>

            {/* START FROM HERE */}

            <PowerRight>
              <ProgDiv>
                <ProgressCircle>78%</ProgressCircle>
                <small>
                  You have used up 78% of your goal for the month. If you
                  continue with your daily average usage, you have 3 days left
                </small>
              </ProgDiv>
              <SwitchRight>
                <NotUpRight>
                  <label htmlFor="lowUsage">Turn on Low Usage</label>
                  <small>
                    The Low Usage Mode will limit power usage to essentials -
                    dim lights, disable sockets that are not in use.
                  </small>
                </NotUpRight>
                <Down>
                  <SwitchInput type="checkbox" id="lowUsage" />
                  <span></span>
                </Down>
              </SwitchRight>
            </PowerRight>

            {/* END HERE */}
          </PowerContainer>
        </Main>
      </Container>
    </PageWrapper>
  );
};

export default Notifications;

const PowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NotDiv = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const PowerLeft = styled.div`
  flex: 1;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Down = styled.div``;
// const PowerRight = styled.div`
//   flex: 0.4;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   // align-items: center;
//   // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

const UsageGoal = styled.div`
  display: flex;
  gap: 1rem;
  // padding-left: 1.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.2rem;
  background: rgb(234, 237, 238);
`;

// const Input = styled.input`
//   padding: 0.6rem;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   width: 100px;
// `;

const Switch = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: rgb(234, 237, 238);
  padding: 1.3rem;
`;

const SwitchRight = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  background: rgb(234, 237, 238);
  padding: 1.3rem;
`;

const SwitchInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  + span {
    width: 40px;
    height: 20px;
    background: #ccc;
    border-radius: 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: background 0.2s;

    &:before {
      content: "";
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: transform 0.2s;
    }
  }

  &:checked + span {
    background: #2c62f6;

    &:before {
      transform: translateX(20px);
    }
  }
`;

const NotificationThreshold = styled.div`
  display: flex;
  gap: 0.1rem;
  margin-bottom: 2rem;
  background: rgb(234, 237, 238);
  justify-content: space-between;
  padding: 1.3rem;
`;

const NotUp = styled.div``;

const NotUpRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const PowerRight = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.3rem;
  // background: #f8f9fc; /* Light background to match the design */
  border-radius: 10px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: -5rem;
  text-align: center;
  padding: 1.3rem 0.8rem 1.3rem 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #f8f9fc; /* Light background to match the design */
`;

const ProgressCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(#2c62f6 78%, #e5e5e5 0);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: #fff;
  }

  &:after {
    content: "78%";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    z-index: 1;
  }
`;
