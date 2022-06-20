import React from 'react';
import PropTypes from 'prop-types';
import { UploadPercent, UploadText } from './upload-overview.styles';

function calculatePercentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

export const UploadOverview = ({ partialValue, totalValue, text }) => {
    return (
        <div className="UploadOverview container">
            <p className="col">
                <UploadPercent>{calculatePercentage(partialValue, totalValue)}%</UploadPercent>
                <UploadText>{text}</UploadText>
            </p>
        </div>
    )
}

UploadOverview.propTypes = {
    uploads: PropTypes.number,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number,
    lastUploadDate: PropTypes.number
};

export default UploadOverview;