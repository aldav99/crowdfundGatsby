import React from 'react';

function withLoading(EnhancedComponent) {
    return function withLoadingEnhancedComponent({ isLoading, ...props }) {
        if (!isLoading)
            return <EnhancedComponent {...props} />;
        return <div>Loading...</div>;
    };
}

export default withLoading;