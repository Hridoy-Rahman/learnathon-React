
import withCounter from "./withCounter";

const CounterComponent = (props) => {

    const {count, handleCount} = props

    return (
        <div>
          
            <button onClick={handleCount}> Count {count} times</button>
        </div>
    );
};
export default withCounter(CounterComponent);
