import { useEffect, useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import VideoLoader from './Loader'
import ServicesDet from './ServicesDet'
import BlogDet from './BlogDet'
import ScrollToTop from './ScrollToTop'
import CreateAccount from './CreateAccount'
import OtherDetails from './OtherDetails'
import Dashboard from './Dashboard'
import ProfileDetails from './ProfileDetails'
import Support from './Support'
import Login from './Login'
import LoginCode from './LoginCode'
import StartTransfer from './StartTransfer'
import AddAmount from './AddAmount'
import ComfirmPayment from './ComfirmPayment'
import TransactionPin from './TransferPin'
import Sucess from './Sucess'
import RecentTransactions from './RecentTransactions'
import TransactionDetails from './TransactionDetails'
import NotificationDet from './NotificationDet'
import Settings from './Settings'
function App() {
 const [loading , setLoading] = useState(true)
 useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  } , 3000)
  return () => clearTimeout(timer)
 }, [])
  return (
    <>
     {
      loading ? <VideoLoader/> :
     <>
      <ScrollToTop/>
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path = '/serviceDet/:id' element = {<ServicesDet/>}/>
      <Route path = '/blogDet/:id' element = {<BlogDet/>} />
      <Route path = '/createAccount' element = {<CreateAccount/>} />
      <Route path = '/otherDetails' element = {<OtherDetails/>} />
      <Route path = '/dashboard' element = {<Dashboard/>} />
      <Route path = '/profileDetails' element = {<ProfileDetails/>} />
      <Route path = '/support' element = {<Support/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/login-code' element = {<LoginCode/>} />
      <Route path = '/start-transfer' element = {<StartTransfer/>}/>
      <Route path = '/add-amount' element = {<AddAmount/>}/>
      <Route path ='/comfirm-payment' element = {<ComfirmPayment/>}/>
      <Route path ='/transaction-pin' element = {<TransactionPin/>}/>
      <Route path ='/sucess' element = {<Sucess/>}/>
      <Route path ='/transaction' element = {<RecentTransactions/>}/>
      <Route path ='/transaction-details' element = {<TransactionDetails/>}/>
      <Route path ='/notification-details' element = {<NotificationDet/>}/>
      <Route path ='/settings' element = {<Settings/>}/>
     </Routes>
     </>
     }
    </>
  )
}

export default App
