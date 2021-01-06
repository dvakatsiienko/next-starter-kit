/* Core */
import { useSelector, shallowEqual } from 'react-redux';

/* Instruments */
import { State } from '@/lib/redux';

export const Clock = () => {
    const { lastUpdate, light } = useClock();

    return (
        <div className = { light ? 'light' : '' }>
            {formatTime(lastUpdate)}

            <style jsx>
                {`
                    div {
                        padding: 15px;
                        display: inline-block;
                        color: #82fa58;
                        font: 50px menlo, monaco, monospace;
                        background-color: #000;
                        margin-top: 15px;
                    }

                    .light {
                        background-color: #999;
                    }
                `}
            </style>
        </div>
    );
};

/* Helpers */
function useClock() {
    return useSelector(
        (state: State) => ({
            lastUpdate: state.lastUpdate,
            light:      state.light,
        }),
        shallowEqual,
    );
}

function formatTime(time) {
    // cut off except hh:mm:ss
    return new Date(time).toJSON().slice(11, 19);
}