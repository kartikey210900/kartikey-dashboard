import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import {
  Home,
  Category,
  Store,
  People,
  Collections,
  VideoLibrary,
  Code,
  ExpandLess,
  ExpandMore,
  Assessment,
} from "@mui/icons-material";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    productManagement: true,
    merchantManagement: false,
    userManagement: false,
    trainingManagement: false,
    leadManagement: false, // Added state for Lead Management
  });

  const handleToggle = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div
      style={{
        width: 250,
        backgroundColor: "#b71c1c", // Dark red sidebar
        height: "100vh",
        padding: "10px",
        color: "white",
      }}
    >
      <List>
        {/* Dashboard */}
        <ListItem button>
          <ListItemIcon>
            <Home style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Product Management */}
        <ListItem button onClick={() => handleToggle("productManagement")}>
          <ListItemIcon>
            <Category style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Product Management" />
          {openMenus.productManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMenus.productManagement} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            style={{ backgroundColor: "#d32f2f" }}
          >
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="Create Product" />
            </ListItem>
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="Categories" />
            </ListItem>
          </List>
        </Collapse>

        {/* Merchant Management */}
        <ListItem button onClick={() => handleToggle("merchantManagement")}>
          <ListItemIcon>
            <Store style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Merchant Management" />
          {openMenus.merchantManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={openMenus.merchantManagement}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
            style={{ backgroundColor: "#d32f2f" }}
          >
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="All Merchants" />
            </ListItem>
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="Pending Approvals" />
            </ListItem>
          </List>
        </Collapse>

        {/* Lead Management (Moved below Merchant Management) */}
        <ListItem button onClick={() => handleToggle("leadManagement")}>
          <ListItemIcon>
            <Assessment style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Lead Management" />
          {openMenus.leadManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMenus.leadManagement} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            style={{ backgroundColor: "#d32f2f" }}
          >
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="All Leads" />
            </ListItem>
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="Lead Conversion" />
            </ListItem>
          </List>
        </Collapse>

        {/* User Management */}
        <ListItem button onClick={() => handleToggle("userManagement")}>
          <ListItemIcon>
            <People style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="User Management" />
          {openMenus.userManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMenus.userManagement} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            style={{ backgroundColor: "#d32f2f" }}
          >
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="All Users" />
            </ListItem>
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="Roles & Permissions" />
            </ListItem>
          </List>
        </Collapse>

        {/* Banners */}
        <ListItem button>
          <ListItemIcon>
            <Collections style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Banners" />
        </ListItem>

        {/* Training Management */}
        <ListItem button onClick={() => handleToggle("trainingManagement")}>
          <ListItemIcon>
            <VideoLibrary style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Training Management" />
          {openMenus.trainingManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={openMenus.trainingManagement}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
            style={{ backgroundColor: "#d32f2f" }}
          >
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="All Trainings" />
            </ListItem>
            <ListItem button style={{ paddingLeft: 30 }}>
              <ListItemText primary="Webinars" />
            </ListItem>
          </List>
        </Collapse>

        {/* Code Upload Management */}
        <ListItem button>
          <ListItemIcon>
            <Code style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Code Upload Management" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
