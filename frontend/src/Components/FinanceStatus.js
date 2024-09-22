const OrderStatus = ({ status }) => {
    const getStatusStyle = (status) => {
        switch (status) {
            case "Успешно":
                return { color: '#00FF19' };
            case "Отклонено":
                return { color: "#FF0000" };
            case "В процессе...":
                return { color: "#ff6a00" };
            default:
                return { color: "black" };
        }
    };

    return <span style={getStatusStyle(status)}>{status}</span>;
};

export default OrderStatus;
