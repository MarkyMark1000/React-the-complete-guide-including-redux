import {useState, useRef} from 'react';
import ResultModal from './ResultModal.jsx';

// This works a bit, but becomes a global variable shared by different components
// so you end up with confused code.
// let timer;

export default function TimerChallenge({title, targetTime}) {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    // let timer;           This dosn't work because react rebuilds this code

    function handleStart() {
        timer.current = setTimeout(()=>{
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime*1000);

        // can go here because timer doesn't fire until later
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You Lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime>1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}