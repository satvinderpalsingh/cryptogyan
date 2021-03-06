import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoGyan</Link>
        </Typography.Title>
      </div>
    </div>
  );
};

export default Navbar;
