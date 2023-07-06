import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
<<<<<<< HEAD
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowUp";
=======
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;

  //temporary date
  // const amount = 100;
  // const diff = 20;
=======

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
<<<<<<< HEAD
        query: "users",
=======
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
<<<<<<< HEAD
    case "product":
      data = {
        title: "PRODUCTS",
        //      isMoney: true,
        link: "See details",
        query: "products",
=======
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

<<<<<<< HEAD
  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timestamp", "<=", today),
        where("timestamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, data.query),
        where("timestamp", "<=", lastMonth),
        where("timestamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      //      console.log("Last month: " + lastMonthData.docs.length);
      //      console.log("Prev month: " + prevMonthData.docs.length);

      setAmount(lastMonthData.docs.length);

      // TO DO: Check percentage formula.
      // Percentage formula = (Value/Total value) × 100
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };
    fetchData();
  }, []);

=======
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
<<<<<<< HEAD
        <div className={`percentage ${diff < 0 ? "negative" : "postive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
=======
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
