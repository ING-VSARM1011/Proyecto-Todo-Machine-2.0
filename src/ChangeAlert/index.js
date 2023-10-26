import React from "react";
import { withStorageListener } from "./withStorageListener";


function ChangeAlert({ show, toogleShow }) {
    if (show) {
        return (
          <div>
            <p>Alerta!!! Hubo cambios</p>
            <button onClick={() => toogleShow(false)}>
              Cargar Información
            </button>
          </div>
        );
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }