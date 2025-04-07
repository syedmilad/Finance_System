import React from 'react'
import { useDispatch } from 'react-redux'
import { addBalance, editBalance } from '../actions'
import { balances } from '../constants/dashboardData'
import Modal from './Modal'
import { toast } from 'react-toastify'

const AddBalance = ({ isEdit, isOpen, toggle, initialBalance = {} }) => {

    const dispatch = useDispatch()

    const [newBalance, setNewBalance] = React.useState(initialBalance || {
        type: '',
        amount: '',
        bank: '',
        accountNumber: '',
    })

    const isSubmitHandler = () => {
        // Handle the submit logic here
        console.log('Submit clicked', newBalance)

        if (!newBalance.type || !newBalance.amount || !newBalance.bank || !newBalance.accountNumber) {
            toast.error("Please fill all the fields")
            return
        }

        if(isEdit){
            console.log("isEdit")
            dispatch(editBalance(newBalance))
        }else{
            dispatch(addBalance(newBalance))
            // setBalance((prev) => [...prev, newBalance])

            setNewBalance({
                type: '',
                amount: '',
                bank: '',
                accountNumber: '',
            }) // Reset the newBalance state
        }
        toggle() // close the modal after submission
        
    }

    console.log("id==>",newBalance)

    const onValueChangeHandler = (e) => {

        const updatedBalances = balances.map((balance,_)=>{
            return balance?.id === newBalance?.id ? newBalance : balance
        })

        const { name, value } = e.target
        setNewBalance((prev) => ({ ...prev, [name]: value }))
        
    }

    return (
        <Modal onClose={toggle} onSave={isSubmitHandler} isOpen={isOpen}>
            <div className='flex flex-col justify-start items-start m-auto gap-2 px-[2rem]'>

                <label className='text-base font-semibold text-[#525256]' htmlFor="Card Type">Card Type</label>
                <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='type' placeholder='Credit Card' value={newBalance.type} onChange={onValueChangeHandler} id='Card Type' />

                <label className='text-base font-semibold text-[#525256]' htmlFor="Amounts">Amounts</label>
                <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='amount' placeholder='Write Amount Here' value={newBalance.amount} onChange={onValueChangeHandler} id='Amounts' />

                <label className='text-base font-semibold text-[#525256]' htmlFor="bank">Bank Name</label>
                <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='bank' placeholder='Write Bank Name here' value={newBalance.bank} onChange={onValueChangeHandler} id='bank' />

                <label className='text-base font-semibold text-[#525256]' htmlFor="accountNumber">Account Number</label>
                <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='accountNumber' placeholder='Write Account Number Here' value={newBalance.accountNumber} onChange={onValueChangeHandler} id='accountNumber' />

            </div>
        </Modal>
    )
}

export default AddBalance