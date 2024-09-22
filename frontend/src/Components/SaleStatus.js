const SaleStatus = ({ status }) => {
    const getStatusStyle = (status) => {
        switch (status) {
            case "Успешно":
                return { color: '#00FF19' };
            case "Возврат":
                return { color: "#FF0000" };
            case "Оплачен":
                return { color: "#ff6a00" };
            default:
                return { color: "black" };
        }
    };

    return <span style={getStatusStyle(status)}>{status}</span>;
};

export default SaleStatus;