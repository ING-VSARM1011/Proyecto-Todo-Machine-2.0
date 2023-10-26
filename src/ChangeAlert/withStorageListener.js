import React from "react";


function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);
        
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('Hubo Cambios en TODOS_V1');
                setStorageChange(true);
            } 
        });

        const toogleShow = () => {
            props.sincronize();
            setStorageChange(false);
        };

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={toogleShow} 
            />
        );
    }
}

export { withStorageListener }