import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SalesInfo, SalesTitle } from './sales-overview.styles';
import UploadOverview from '../upload-overview/upload-overview';
import './sales-overview.css';

export const SalesOverview = ({ data }) => {
    console.log(data);

    return (
        <div className="SalesOverview container">
            <div className='sales-text-container'>
                <SalesTitle>
                    <FontAwesomeIcon icon={faUpload} color="#44C1F2" />
                    <span> Sales</span>
                    <span className="info-icon">
                        <FontAwesomeIcon icon={faInfoCircle} color="#D3D3D3" />
                    </span>
                </SalesTitle>
                <SalesInfo>You had
                    <span style={{ fontWeight: 'bold' }}> {data.salesOverview.uploads} uploads </span>
                    and <span style={{ fontWeight: 'bold' }}> {data.salesOverview.linesSaved} </span>
                    lines added.</SalesInfo>
            </div>
            <div className="row">
                <div className="col percentage-container upload">
                    <UploadOverview partialValue={data.salesOverview.successfulUploads}
                        totalValue={data.salesOverview.uploads} text="Upload success" />
                </div>
                <div className="col percentage-container">
                    <UploadOverview partialValue={data.salesOverview.linesSaved}
                        totalValue={data.salesOverview.linesAttempted} text="Lines saved" />
                </div>
            </div>
        </div>
    )
}


SalesOverview.propTypes = {
    uploads: PropTypes.number,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number
    /* lastUploadDate: PropTypes.number */
};

export default SalesOverview;