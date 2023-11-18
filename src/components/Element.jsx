
// eslint-disable-next-line react/prop-types
export default function Element({symbol, highlightElement, displayElementInfo}) {
    return (
        <td
        data-symbol={symbol}
        onClick={() => {
            highlightElement(symbol);
            displayElementInfo(symbol);
        }}>
        {symbol}
    </td>
);
}
