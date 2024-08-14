function Content(){
    return(
        <div class="content">
            <div class="tbl">
            <table >
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>College Name</th>
                    <th>Year of Passed out</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ashika</td>
                    <td>IT</td>
                    <td>HICET</td>
                    <td>2025</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sowndharya</td>
                    <td>IT</td>
                    <td>HICET</td>
                    <td>2025</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Karunya</td>
                    <td>CSE</td>
                    <td>HICET</td>
                    <td>2025</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Moni</td>
                    <td>Civil</td>
                    <td>AU</td>
                    <td>2017</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Nisha</td>
                    <td>IT</td>
                    <td>HICET</td>
                    <td>2025</td>
                </tr>
            </table>
            </div>
            <div class="form">
                <h2 >Contact Us</h2>
                <div class="form1">
                <label>Email : </label>
                <input placeholder="Enter your Email"></input>
                </div>
                <div class="form1">
                <label>Password : </label>
                <input placeholder="Enter your Password"></input>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )

}

export default Content;