import React from 'react'

const TranasactionTable = ({transactionData}) => {
    const {amount, date, status, type, reciept} = transactionData || {}
    return (
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Transaction Type</th>
                        <th>Reciept</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{date}</td>
                        <td>{status}</td>
                        <td>{type}</td>
                        <td>{reciept}</td>
                        <td>{amount}</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default TranasactionTable