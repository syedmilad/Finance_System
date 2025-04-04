import { Figma, Adobe } from "../assets/index";

export const totalBalance = [
  {
    id: 1,
    amount: "25,000",
    type: "Credit Card",
    accountNumber: "**** **** **** 2598",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
  },
  {
    id: 2,
    amount: "30,000",
    type: "Debit Card",
    accountNumber: "**** **** **** 4567",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
  },
  {
    id: 3,
    amount: "50,000",
    type: "Savings",
    accountNumber: "**** **** **** 7890",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
  },
];

export const upcomingBill = [
  {
    id: 1,
    name: "Figma",
    logo: Figma,
    month: "May",
    date: "15",
    description: "figma - Monthly",
    lastCharge: "14 May, 2023",
    amount: "150",
  },
  {
    id: 2,
    name: "Adobe",
    logo: Adobe,
    month: "June",
    date: "16",
    description: "Adobe - Yearly",
    lastCharge: "17 June, 2023",
    amount: "559",
  },
];
