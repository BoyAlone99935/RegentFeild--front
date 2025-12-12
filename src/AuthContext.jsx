import { createContext , useContext } from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
const AuthContext =  createContext()
export const  AuthProvider = ({children}) => {
const [firstName , setFirstName] = useState("") 
const [lastName , setLastName] = useState("") 
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const [user , setUser] = useState(null)
const [loading , setLoading] = useState(false)
const [transactions , setTransaction] = useState([])
const [notifications , setNotification] = useState([])
const [beneficiaries , setBeneficiaries] = useState([])
const [balance , setBalance] = useState()
const [token, setToken] = useState(localStorage.getItem("token") || "");


useEffect(() => {
if (!token) return
console.log(token)
const getProfileDetails = async () => {
  setLoading(true)
     
  try {
    const res = await axios.get('https://regent-feild.vercel.app/api/users/me' , {
    headers: {
      Authorization: `Bearer ${token}`
    }
   })
   setUser(res.data.user)
   console.log(res.data.user)
   setBalance(res.data.user.AccountBalance)
  } catch(err) {
    console.log(err)
  }
}
getProfileDetails()
} , [token])

useEffect(() => {
  if (!token) return
  const fetchData = async () => {
    setLoading(true);
    try {
      const [transactionsRes, notificationsRes] = await Promise.all([
        axios.get('https://regent-feild.vercel.app/api/transfer/allTransactions', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }),
        axios.get('https://regent-feild.vercel.app/api/transfer/allNotifications', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      ]);
      setTransaction(transactionsRes.data.allTransactions);
      setNotification(notificationsRes.data.AllNotification);
      console.log(transactionsRes.data.allTransactions)
      console.log(notificationsRes.data.AllNotification)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, [token]);

  useEffect(() => {
  const fetchBeneficiaries = async () => {
    setLoading(true)
    try {
      const res = await axios.get('https://regent-feild.vercel.app/api/transfer/allBeneficiaries', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data)
      setBeneficiaries(res.data.AllBeneficiaries)
      setLoading(false)
    } catch(err) {
      console.log(err)
      setLoading(false)
    }
  }
  fetchBeneficiaries()
}, [token])
 
  
  const saveToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken); // triggers all effects
  };

  // AuthContext.jsx
  async function refreshTransactions() {
  if (!token) return;

  const res = await axios.get("https://regent-feild.vercel.app/api/transfer/allTransactions", {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  setTransaction(res.data.allTransactions);
 }
 
  async function refreshNotifications() {
  if (!token) return;

  const res = await axios.get("https://regent-feild.vercel.app/api/transfer/allNotifications", {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  setNotification(res.data.AllNotification);
 }
  async function refreshBeneficiary() {
  if (!token) return;

  const res = await axios.get("https://regent-feild.vercel.app/api/transfer/allBeneficiaries", {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  setBeneficiaries(res.data.AllBeneficiaries);
 }
return (

  <AuthContext.Provider value={{
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    user,
    setUser,
    notifications,
    transactions,
    setTransaction,
    setNotification,
    balance, 
    setBalance,
    saveToken,
    refreshTransactions,
    refreshNotifications,
    beneficiaries,
    refreshBeneficiary
  }}>
   {children} 
  </AuthContext.Provider>
)
}

export const useAuth = () => {
  return useContext(AuthContext)
}