const PlantRow = ({ planta, humedad, estado }) => {
    return (
        <>
            <tr className="tr-body">
                <td className="tr-body-item">{planta}</td>
                <td className="tr-body-item">{humedad}</td>
                <td className="tr-body-item">
                    {estado === 'Optimo' && <span style={{ color: 'green' }}>●</span>}
                    {estado === 'Critico' && <span style={{ color: 'red' }}>●</span>}
                    {estado}
                </td>
            </tr>
        </>
    )
}

export default PlantRow;