
const Table = ({ country, active, deaths, recovered, confirmed, deltaconfirmed, deltarecovered, deltadeaths }) => {

    if (deaths > 0) {
        return (

            <tr>
                <td>
                    {country}
                </td>
                <td>
                    {active}
                </td>
                <td>
                    {confirmed}<span>&nbsp;<span>&#8593;</span>{deltaconfirmed}</span>
                </td>
                <td>
                    {recovered}<span>&nbsp;<span style={{ color: "green" }}>&#8593;</span>{deltarecovered}</span>
                </td>
                <td>
                    {deaths}<span>&nbsp;<span style={{ color: "red" }}>&#8593;</span>{deltadeaths}</span>
                </td>

            </tr>);
    }
    else {
        return true;
    }

}
export default Table;