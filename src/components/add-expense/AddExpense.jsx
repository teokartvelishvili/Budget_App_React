import './AddExpense.css';
import LabelInput from '../label-input/LabelInput';
import Select from '../select/Select';
import { useState } from 'react';


const expArr = ["შოპინგი", "ჯანმრთელობა", "საოჯახო", "სხვა"];
const incArr = ["ხელფასი", "ინვოისი", "სხვა"];



const AddExpense = () => {
    return(
        <form>
        <div className='form_page'>
            <div id='formId'>
                <div id='date'>
                <LabelInput
                type={'date'}
                /></div>

                <div id='radios'>
                    <section><LabelInput
                    id="in"
                    value="income"
                    type="radio"
                    name="1"
                    text="შემოსავალი"
                    /></section>
                    <section><LabelInput
                    id="ex"
                    value="expense"
                    type="radio"
                    name="1"
                    text="გასავალი"
                    /></section>
                </div>

                <div>

                <select name="select" id="select">
                    <option value="'sallary'">კატეგორია</option>
                </select>

                
                </div>
                <div  id='num'>
                <input type="number" placeholder="GEL" />
                </div>
                <div>
                <button id='butt'>დამატება</button>
                </div>
            </div>
            
        </div>
        </form>
    )
}

export default AddExpense ;