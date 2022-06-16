import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sales-overview.css';
import { faBullseye, faCloudUploadAlt, faFileUpload, faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';

function calculatePercentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

export const SalesOverview = ({ data }) => {
    console.log(data);

    return (
        <div className="SalesOverview container">
            <div>
                <FontAwesomeIcon icon={faUpload} color="#44C1F2" />
                Sales
                <FontAwesomeIcon icon={faInfoCircle} color="#D3D3D3" />
                <p>You had {data.salesOverview.uploads} uploads and {data.salesOverview.linesSaved} lines added.</p>
            </div>
            <div className="row">
                <p className="col">
                    <p>{calculatePercentage(data.salesOverview.successfulUploads, data.salesOverview.uploads)}%</p>
                    <p>Upload success</p>
                </p>
                <p className="col">
                    <p>{calculatePercentage(data.salesOverview.linesSaved, data.salesOverview.linesAttempted)}% </p>
                    <p>Lines saved</p>
                </p>
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