import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { formatDate2 } from "./FormattDate";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const location = useLocation();
  const recipientDetails = location.state.recipient;
  const logo = location.state.logo;
  const navigate = useNavigate()
  return (
    <div className="success-container">
      <div className="success-card">

        <div className="success-icon">
          <div className="outer">
            <div className="inner">✓</div>
          </div>
        </div>

        <div className="success-title">
          <h2>Transfer Successful</h2>
          <p>
            Beneficiary should receive the money within 5 minutes, depending on
            their bank.
          </p>
        </div>

        <div className="summary-box">
          <h2>
            ${recipientDetails.transaction.details.amount.toLocaleString()}.00
          </h2>

          <p className="desc">
            To {recipientDetails.transaction.details.beneficiary}
          </p>

          <div className="bank-info">
            <img src={logo} alt="bank-logo" />
            <span>
              {recipientDetails.transaction.details.beneficiaryInstitution}
            </span>
          </div>

          <p className="date">
            {formatDate2(recipientDetails.transaction.details.createdAt)}
          </p>

          <div className="notice">
            <p>
              If the beneficiary does not receive the funds within 30 minutes,
              please contact our support team.
            </p>
          </div>
        </div>

        <button className="done-btn" onClick={() => {
          navigate('/dashboard', { state: { refresh: true } });
        }}>Done</button>
      </div>
    </div>
  );
}


export default Success