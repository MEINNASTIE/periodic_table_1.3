// eslint-disable-next-line react/prop-types
export default function ElementInfoModal({ showModal, closeModal, elementInfo, uppercaseSymbol }){
    return (
        <div id="element-modal" style={{ display: showModal ? 'block' : 'none' }}>
            <button id="close-modal" onClick={closeModal}>
                Close Modal
            </button>
            <div id="element-info">
                {elementInfo ? (
                    <>
                        <p>Element: {elementInfo.name || 'N/A'}</p>
                        <p>Atomic Number: {elementInfo.atomicNumber || 'N/A'}</p>
                        <p>Atomic Mass: {elementInfo.mass || 'N/A'}</p>
                    </>
                ) : (
                    <p>Element with symbol {uppercaseSymbol} not found.</p>
                )}
            </div>
        </div>
    );
}
