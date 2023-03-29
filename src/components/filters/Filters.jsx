
import './filters.css';

import LabelInput from '../label-input/LabelInput';
import { useState } from 'react';
import Select from '../select/Select';



const Filters = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [minAmount, setMinAmount] = useState(undefined);
  const [maxAmount, setMaxAmount] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState();
  const onSelectedDate = (e) => setSelectedDate(e.target.value);
  const onMinAmountChange = (e) => setMinAmount(e.target.value);
  const onMaxAmountChange = (e) => setMaxAmount(e.target.value);
  const onCategoryChange = (e) => setSelectedCategory(e.target.value);

  const onFiltersSubmit = () => {

    const minAmountInt = parseFloat(minAmount)
    const maxAmountInt = parseFloat(maxAmount);

    console.log({ minAmountInt, maxAmountInt, selectedCategory, selectedDate })


    // console.log({
    //   selectedDate,
    //   parseFloat(minAmount),
    //   maxAmount,
    //   selectedCategory
    // })
  }
  const options = [
    {
      id: 1,
      label: 'ხელფასი'
    },
    {
      id: 2,
      label: 'ინვოისი'
    },
    {
      id: 3,
      label: 'შოპინგი'
    },
    {
      id: 4,
      label: 'ჯანმრთელობა'
    },
    {
      id: 5,
      label: 'საოჯახო'
    },
    {
      id: 6,
      label: 'სხვა'
    }
  ]
  return (
    <div className='filters__container'>
      <section>
      <LabelInput
        id={1}
        text='თარიღი:'
        type={'date'}
        name={'date-filter'}
        value={selectedDate}
        onChange={onSelectedDate}
      /></section>
      <div>
        <section>
        <Select
          value={selectedCategory}
          text='კატეგორია:'
          options={options}
          onChange={onCategoryChange}
        /></section>
      </div>
      <div className='amount__filters_container'>
        <section>
        <LabelInput
          id={3}
          text='მინ:'
          type={'number'}
          name={'amount-min-filter'}
          value={minAmount}
          onChange={onMinAmountChange}
        /></section>
        <section>
        <LabelInput
          id={4}
          text='მაქს:'
          type={'number'}
          name={'amount-max-filter'}
          value={maxAmount}
          onChange={onMaxAmountChange}
        /></section>
      </div>
      <section>
      <div className='apply__button__container'>
        <button onClick={onFiltersSubmit} className='apply__button'>ფილტრი</button>
      </div></section>
      
    </div>
    
  )
}

export default Filters;