import './App.css';

const ProgressBar = ({ progress }) => {
    const percentage = progress + '%';

    return (
        <div className='progress-bar'>
            <div className='progress-bar-filling' style={{ width : percentage }} />
        </div>
    );
}

export default ProgressBar;