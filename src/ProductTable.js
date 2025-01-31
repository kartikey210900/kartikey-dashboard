import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Edit, Refresh } from "@mui/icons-material"; // Import icons

// Custom Styled Switch
const CustomSwitch = styled(({ checked, onChange }) => (
  <label
    style={{
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      width: "38px",
      height: "24px",
      borderRadius: "15px",
      backgroundColor: checked ? "#d32f2f" : "#e0e0e0",
      color: checked ? "#fff" : "#6c757d",
      fontWeight: "bold",
      fontSize: "10px",
      justifyContent: "space-between",
      position: "relative",
      transition: "0.3s ease-in-out",
      paddingLeft: checked ? "30px" : "5px",
      paddingRight: checked ? "5px" : "30px",
    }}
  >
    <span
      style={{
        position: "absolute",
        left: checked ? "8px" : "45%",
        top: "50%",
        transform: "translateY(-50%)",
        transition: "0.3s ease-in-out",
        pointerEvents: "none",
      }}
    >
      {checked ? "Active" : "Inactive"}
    </span>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ display: "none" }}
    />
    <span
      style={{
        width: "18px",
        height: "18px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        position: "absolute",
        top: "3px",
        left: checked ? "calc(100% - 20px)" : "4px", // Adjust ball position
        transition: "0.3s ease-in-out",
      }}
    />
  </label>
))``;

const initialProducts = [
  {
    id: 1,
    image: "💰",
    name: "Personal Loan",
    category: "Personal Loan",
    type: "VARIABLE",
    value: "5%",
    label: "Popular",
    status: true,
  },
  {
    id: 2,
    image: "🏡",
    name: "Home Loan",
    category: "Home Loan",
    type: "VARIABLE",
    value: "0.7%",
    label: "",
    status: true,
  },
  {
    id: 3,
    image: "🏢",
    name: "Business Loan",
    category: "Business Loan",
    type: "VARIABLE",
    value: "2%",
    label: "",
    status: true,
  },
  {
    id: 4,
    image: "💳",
    name: "Credit Card",
    category: "Credit Card",
    type: "FIXED",
    value: "₹500",
    label: "",
    status: true,
  },
  {
    id: 5,
    image: "🔴",
    name: "ABCD app",
    category: "Application",
    type: "FIXED",
    value: "₹50",
    label: "Earn more",
    status: true,
  },
  {
    id: 6,
    image: "🟢",
    name: "ABCD app test",
    category: "Application",
    type: "VARIABLE",
    value: "5%",
    label: "ABCD",
    status: false,
  },
];

const ProductTable = () => {
  const [products, setProducts] = useState(initialProducts);
  const [openDialog, setOpenDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "",
    name: "",
    category: "",
    type: "",
    value: "",
    label: "",
    status: true,
  });

  // Toggle status function
  const handleToggleStatus = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: !product.status } : product
      )
    );
  };

  // Refresh product list
  const handleRefresh = () => {
    setProducts(initialProducts);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    if (!newProduct.name.trim() || !newProduct.category.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: prevProducts.length + 1 },
    ]);

    // Close dialog and reset form
    setOpenDialog(false);
    setNewProduct({
      image: "",
      name: "",
      category: "",
      type: "",
      value: "",
      label: "",
      status: true,
    });
  };

  return (
    <div style={{ padding: 20, flexGrow: 1 }}>
      <h2 style={{ color: "red", paddingTop: "20px" }}>Products</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        <Button
          variant="contained"
          color="error"
          style={{ marginRight: 10 }}
          onClick={handleRefresh}
          startIcon={<Refresh />}
        >
          Refresh
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setOpenDialog(true)}
        >
          + Add Product
        </Button>
      </div>

      <TableContainer
        component={Paper}
        style={{ marginTop: 20, padding: "10px 20px" }}
      >
        <Table>
          <TableHead
            style={{
              backgroundColor: "#f5f5f5",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Image</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Commission Type
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Commission Value
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Label Tag</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.image}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.value}</TableCell>
                <TableCell>{product.label}</TableCell>
                <TableCell>
                  <CustomSwitch
                    checked={product.status}
                    onChange={() => handleToggleStatus(product.id)}
                  />
                </TableCell>
                <TableCell>
                  <Edit
                    color="primary"
                    style={{ cursor: "pointer", fontSize: "24px" }} // Increased size of the icon
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Adding New Product */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Image"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Commission Type"
            name="type"
            value={newProduct.type}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Commission Value"
            name="value"
            value={newProduct.value}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Label Tag"
            name="label"
            value={newProduct.label}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddProduct} color="primary">
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductTable;
