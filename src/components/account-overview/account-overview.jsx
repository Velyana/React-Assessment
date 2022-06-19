import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './account-overview.css';
import { AccountIcon, AccountLetter, AccountTitle, AccountDetails, AccountContact, AccountDetailsContainer } from './account-overview.styles';


export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview container">
      <div className="row">
        <div className="col">
          <AccountTitle>Account Overview</AccountTitle>
        </div>
        <div className="col">
          <div className="support-contact-container">
            <AccountContact>Your feefo support contact</AccountContact>
            <div>
              <AccountIcon>
                <AccountLetter>
                  {data.supportContact.name.charAt(0)}
                </AccountLetter>
              </AccountIcon>
              <div>
                <AccountDetails primary>
                  {data.supportContact.name}
                </AccountDetails>
                <AccountDetailsContainer>
                  <FontAwesomeIcon icon={faEnvelope} color="gray" />
                  <AccountDetails>
                    {data.supportContact.email}
                  </AccountDetails>
                  <AccountDetails>
                    {data.supportContact.phone}
                  </AccountDetails>
                </AccountDetailsContainer>
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