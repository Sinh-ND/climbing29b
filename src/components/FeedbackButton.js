import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZaloIcon from './zalo.svg'; // Đường dẫn tới tệp SVG của Zalo


const FeedbackButton = () => {
    const navigate = useNavigate();

    const handleFeedbackClick = () => {
        // Điều hướng đến trang feedback
        navigate('/feedback');
    };

    const handleZaloClick = () => {
        // Điều hướng đến link Zalo
        window.open('https://zalo.me/g/idiyqa927', '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <button className="btn btn-info feedback-button" onClick={handleFeedbackClick}>
                Feedback
            </button>
            <div className=" zalo-button" onClick={handleZaloClick}>
                <img src={ZaloIcon} alt="Zalo"  />
                {/* Hoặc nếu bạn muốn sử dụng Font Awesome cho biểu tượng Zalo */}
                {/* <FontAwesomeIcon icon={faZalo} size="lg" /> */}
            </div>
        </div>
    );
};

export default FeedbackButton;
