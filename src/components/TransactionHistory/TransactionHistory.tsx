import styled from "styled-components";
import {FC} from "react";

type TransactionType = 'payment' | 'withdrawal' | "deposit" | 'invoice'
type TransactionHistory ={
    id : string,
    type:  string,
    amount: string,
    currency: string
}
type Props = {
    transactions: TransactionHistory[]
}
const TransactionHistory: FC<Props> = ({transactions}) =>{
    return (
        <Table className="transaction-history">
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            {
                transactions.map(({type, amount, currency, id})=>(
                    //@ts-ignore
                    <TableRow type={type} key={id} >
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TableRow>
                ))

            }
            </tbody>
        </Table>
    )
}
const Table = styled.table`
    min-width: 400px;
    text-align: center;
`
const TableRow = styled.tr<StyledComponentProps>`
    background: ${(props)=>{
       switch (props.type) {
           case "withdrawal":
               return "red";
           case "deposit":
               return "yellow"
           case "invoice":
               return "blue";
           case "payment":
               return "purple"
           default:
               return "grey"
       }
    }}
`

interface StyledComponentProps {
    type: TransactionType
}
export default TransactionHistory