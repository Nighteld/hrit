export default function ClassSchedule() {
    return (
        <div>
            <table className="table1 class1 rwd-table">
                <tbody>
                    <tr>
                        <th>Time</th>
                        <th>12 LAW</th>
                        <th>12 MGMT</th>
                        <th>11 LAW</th>
                        <th>11 MGMT A</th>
                        <th>11 MGMT B</th>
                    </tr>
                    <tr className="alt">
                        <td data-th="Time">6:20-7:00</td>
                        <td data-th="12 LAW">Cont. Society <span>H.K.R.</span></td>
                        <td data-th="12 MGMT">C. English <span>P.B.</span></td>
                        <td data-th="11 LAW">C. English <span>N.A.</span></td>
                        <td data-th="11 MGMT A">Economics <span>B.J.</span></td>
                        <td data-th="11 MGMT B">Accountancy</td>
                    </tr>
                    <tr>
                        <td data-th="Time">7:00-7:40</td>
                        <td data-th="12 LAW">C. English <span>P.B.</span></td>
                        <td data-th="12 MGMT">Economics <span>B.J.</span></td>
                        <td data-th="11 LAW">M. English <span>A.Y.</span></td>
                        <td data-th="11 MGMT A">C. English <span>N.A.</span></td>
                        <td data-th="11 MGMT B">C. Nepali <span>DR. C.M.S</span></td>
                    </tr>
                    <tr className="alt">
                        <td data-th="Time">7:40-7:45</td>
                        <td colSpan="5">Short Break</td>
                    </tr>
                    <tr>
                        <td data-th="Time">7:45-8:25</td>
                        <td data-th="12 LAW">M. English <span>A.Y.</span></td>
                        <td data-th="12 MGMT">Marketing <span>K.P.</span>, Math <span>G.B.M.</span></td>
                        <td data-th="11 LAW">Economics <span>B.J.</span></td>
                        <td data-th="11 MGMT A">C. Nepali <span>DR. C.M.S</span></td>
                        <td data-th="11 MGMT B">C. English <span>N.A.</span></td>
                    </tr>
                    <tr className="alt">
                        <td data-th="Time">8:25-8:55</td>
                        <td colSpan="5">Short Break</td>
                    </tr>
                    <tr>
                        <td data-th="Time">8:55-9:35</td>
                        <td data-th="12 LAW">Economics <span>B.J.</span></td>
                        <td data-th="12 MGMT">Accountancy <span>S.N.</span></td>
                        <td data-th="11 LAW">General Law <span>P.N.R.</span></td>
                        <td data-th="11 MGMT A">Business Studies <span>M.S.</span>, Hotel Management, Computer Science <span>S.B.</span></td>
                        <td data-th="11 MGMT B">Business Studies <span>M.S.</span>, Hotel Management, Computer Science <span>S.B.</span></td>
                    </tr>
                    <tr className="alt">
                        <td data-th="Time">9:35-10:15</td>
                        <td data-th="12 LAW">General Law <span>P.N.R.</span></td>
                        <td data-th="12 MGMT">Business Studies <span>M.S.</span>, Hotel Management <span>K.Y.</span>, Computer Science <span>S.B.</span></td>
                        <td data-th="11 LAW">C. Nepali <span>P.R.</span></td>
                        <td data-th="11 MGMT A">Accountancy <span>S.N.</span></td>
                        <td data-th="11 MGMT B">Economics <span>B.J.</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
