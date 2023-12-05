import '../App.css';

const ProgressBar = ({ duration, progress }) => {
    const percentage = (progress / duration * 100) + '%';

    return (
        <div className='progress-bar'>
            <div className='progress-bar-filling' style={{ width : percentage }} />
        </div>
    );
}

export default ProgressBar;