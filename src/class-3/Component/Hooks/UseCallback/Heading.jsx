import React from 'react';

const Heading = () => {
    console.log('Title rendering')
    return (
        <div>
            <h3>useCallback And useMemo</h3>
        </div>
    );
};

export default React.memo(Heading);