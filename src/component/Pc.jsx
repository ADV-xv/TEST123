function Pc(){
    return (
        <div className="card">
            <h5 className="durai">Plan Comparison</h5>
            <table className="paandi">
                <th>Features</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
                <tr>
                    <td>
                        Users
                    </td>
                    <td>1</td>
                    <td>5</td>
                    <td>Unlimited</td>
                    
                </tr>
                 <tr>
                    <td>
                        Projects
                    </td>
                    <td>5</td>
                    <td>20</td>
                    <td>Unlimited</td>
                    
                </tr>
                 <tr>
                    <td>
                        Support
                    </td>
                    <td>Email</td>
                    <td>Priority</td>
                    <td>24/7</td>
                    
                </tr>
            </table>
        </div>
    )
}
export default Pc;