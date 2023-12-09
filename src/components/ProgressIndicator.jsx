import '../styles/Dashboard.css';

const ProgressIndicator = ({ status }) => {
    const colors = {
        ahead: 'rgb(83, 216, 50)',
        onTrack: 'rgb(55, 178, 226)',
        behind: 'rgb(226, 186, 55)',
    };
    const color = colors[status];

    return (
        <div className='progress-indicator' style={{ color: color }} />
    );
}

export default ProgressIndicator;