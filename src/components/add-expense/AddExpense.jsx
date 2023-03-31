
import './AddExpense.css';
import LabelInput from '../label-input/LabelInput'
import Select from '../../components/select/Select';
import { useState } from 'react';


const IncOptions = [
    {id: 1, label: 'ხელფასი'},
    {id: 2, label: 'ინვოისი'},
    {id: 3, label: 'სხვა'},
]
const ExpOptions = [
    {id: 1, label: 'შოპინგი'},
    {id: 2, label: 'ჯანმრთელობა'},
    {id: 3, label: 'საოჯახო'},
    {id: 4, label: 'სხვა'},
]


const AddExpense = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = selectedOption === 'expense' ? ExpOptions : selectedOption === 'income' ? IncOptions : []
    return (
        <div className='form_page'>
            
            <div id='formId'>
            <h1>ხარჯის დამატება</h1>
                <div>
                <LabelInput 
                        type='date' 
                        id='date' />
                        </div>
                <div id='radios'>
                    <LabelInput 
                        type='radio' 
                        id='inc' 
                        value='income' 
                        labelText='შემოსავალი' 
                        onClick={() => setSelectedOption('income')}
                    />
                    <LabelInput 
                        type='radio' 
                        id='exp' 
                        value='expense' 
                        labelText='გასავალი' 
                        onClick={() => setSelectedOption('expense')}
                    />
                </div>
                <div id='select'>
                <Select options={options} />
                </div>
                <div  id='num'>
                    <input type="number" placeholder="GEL" />
                </div>
                <div>
                    <button id='butt'>დამატება</button>
                </div>
                
            </div>
        </div>
    )
}

export default AddExpense;

