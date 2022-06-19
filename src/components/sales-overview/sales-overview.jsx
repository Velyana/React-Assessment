import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sales-overview.css';
import { faBullseye, faCloudUploadAlt, faFileUpload, faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { SalesInfo, UploadData, UploadText, SalesTitle } from './sales-overview.styles';

function calculatePercentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

export const SalesOverview = ({ data }) => {
    console.log(data);

    return (
        <div className="SalesOverview container">
            <div>
                <SalesTitle>
                    <FontAwesomeIcon icon={faUpload} color="#44C1F2" />
                    Sales
                    <FontAwesomeIcon icon={faInfoCircle} color="#D3D3D3" />
                </SalesTitle>

                <SalesInfo>You had {data.salesOverview.uploads} uploads and {data.salesOverview.linesSaved} lines added.</SalesInfo>
            </div>
            <div className="row">

                {/* border: 1px solid #8C8C8C; */}

                <p className="col">
                    <UploadData>{calculatePercentage(data.salesOverview.successfulUploads, data.salesOverview.uploads)}%</UploadData>
                    <UploadText>Upload success</UploadText>
                </p>
                <p className="col">
                    <UploadData>{calculatePercentage(data.salesOverview.linesSaved, data.salesOverview.linesAttempted)}% </UploadData>
                    <UploadText>Lines saved</UploadText>
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