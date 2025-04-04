import { Figma, Adobe,Game,Taxi,PoloShirt,Food,Keyboard } from "../assets/index";

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


export const transactions = [
  { 
      id: 1, 
      title: "GTR 5", 
      category: "Gadget & Gear", 
      amount: 160.00, 
      type: "revenue", 
      date: "17 May 2023", 
      icon: Game 
  },
  { 
      id: 2, 
      title: "Polo Shirt", 
      category: "XL fashions", 
      amount: 20.00, 
      type: "expense", 
      date: "17 May 2023", 
      icon: PoloShirt 
  },
  { 
      id: 3, 
      title: "Biriyani", 
      category: "Hajir Biriyani", 
      amount: 10.00, 
      type: "expense", 
      date: "17 May 2023", 
      icon: Food
  },
  { 
      id: 4, 
      title: "Taxi Fare", 
      category: "Uber", 
      amount: 12.00, 
      type: "expense", 
      date: "17 May 2023", 
      icon: Taxi 
  },
  { 
      id: 5, 
      title: "Keyboard", 
      category: "Gadget & Gear", 
      amount: 22.00, 
      type: "expense", 
      date: "17 May 2023", 
      icon: Keyboard
  }
];