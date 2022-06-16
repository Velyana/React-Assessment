import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './account-overview.css';
import { AccountIcon, AccountLetter, AccountTitle, AccountDetails, AccountContact } from './account-overview.styles';


export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview container">
      <div className="row">
        <div className="col">
          <AccountTitle>Account Overview</AccountTitle>
        </div>
        <div className="col">
          <div>
            <AccountContact>Your feefo support contact</AccountContact>
            <div>
              <AccountIcon>
                <AccountLetter>
                  J
                </AccountLetter>
              </AccountIcon>

              <div>
                <AccountDetails primary>
                  {data.supportContact.name}
                </AccountDetails>
                <FontAwesomeIcon icon={faEnvelope} color="gray" />
                <AccountDetails>
                  {data.supportContact.email}
                </AccountDetails>
                <AccountDetails>
                  {data.supportContact.phone}
                </AccountDetails>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AccountOverview.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number
};

export default AccountOverview;