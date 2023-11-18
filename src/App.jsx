import './App.css'
// App.js
import React, { useState } from 'react';
import PeriodicTable from './PeriodicTable';
import ElementInfoModal from './ElementInfoModal';

const elementsData = {
    H: { name: 'Hydrogen', atomicNumber: 1, mass: 1.008 },
    He: { name: 'Helium', atomicNumber: 2, mass: 4.0026 },
    Li: { name: 'Lithium', atomicNumber: 3, mass: 7.0 },
};

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [elementInfo, setElementInfo] = useState(null);
    const [uppercaseSymbol, setUppercaseSymbol] = useState('');

    const highlightElement = (symbol) => {
        const cells = document.querySelectorAll('td[data-symbol]');
        cells.forEach((cell) => {
            if (cell.getAttribute('data-symbol') === symbol) {
                cell.classList.add('highlight');
            } else {
                cell.classList.remove('highlight');
            }
        });
    };

    const displayElementInfo = (symbol) => {
        setUppercaseSymbol(symbol.toUpperCase());

        if (symbol === '') {
            return;
        }

        if (elementsData.hasOwnProperty(symbol.toUpperCase())) {
            const info = elementsData[symbol.toUpperCase()];
            setElementInfo(info);
            setShowModal(true);
        } else {
            setElementInfo(null);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const rowData = [
        { symbol: 'H' },
        { symbol: 'He' },
        { symbol: '' }, // Empty cell
        { symbol: 'Li' },
    ];

    return (
        <div>
            <table id="periodic-table">
                <tbody>
                    {rowData.map((item, index) => (
                        <tr key={index}>
                            <Element
                                symbol={item.symbol}
                                highlightElement={highlightElement}
                                displayElementInfo={displayElementInfo}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <ElementInfoModal
                showModal={showModal}
                closeModal={closeModal}
                elementInfo={elementInfo}
                uppercaseSymbol={uppercaseSymbol}
            />
        </div>
    );
};

export default App;

