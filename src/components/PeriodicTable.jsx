import Element from './Element';

// eslint-disable-next-line react/prop-types
const PeriodicTable = ({ highlightElement, displayElementInfo }) => {
    const rowData = [
        { symbol: 'H' },
        { symbol: 'He' },
        { symbol: '' }, // Empty cell
        { symbol: 'Li' },
    ];

    return (
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
    );
};

export default PeriodicTable;