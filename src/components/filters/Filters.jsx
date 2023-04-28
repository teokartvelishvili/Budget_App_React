
import './filters.css';

import LabelInput from '../label-input/LabelInput';
import { useContext, useState } from 'react';
import Select from '../select/Select';
import { ExpensesFeedContext } from '../expenses-feed/ExpensesFeedContext';



const Filters = () => {
  const { filters, setFilters} = useContext(ExpensesFeedContext);
  console.log("Filters", filters)
  const [selectedDate, setSelectedDate] = useState('');
  const [minAmount, setMinAmount] = useState(undefined);
  const [maxAmount, setMaxAmount] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState();
  const onSelectedDate = (e) => setSelectedDate(e.target.value);
  const onMinAmountChange = (e) => setMinAmount(e.target.value);
  const onMaxAmountChange = (e) => setMaxAmount(e.target.value);
  // const onCategoryChange = (e) => setSelectedCategory(e.target.value);

  const onFiltersSubmit = () => {
    setFilters({...filters, selectedCategory, minAmount, maxAmount});
  };


    console.log(selectedDate);

    // const minAmountInt = parseFloat(minAmount)
    // const maxAmountInt = parseFloat(maxAmount);

    // console.log({ minAmountInt, maxAmountInt, selectedCategory, selectedDate })


    // console.log({
    //   selectedDate,
    //   parseFloat(minAmount),
    //   maxAmount,
    //   selectedCategory
    // })

  
  const options = [
    {
      id: 1,
      label: 'ხელფასი',
      value: "salary"
    
    },
    {
      id: 2,
      label: 'ინვოისი',
      value: "invoice"
    },
    {
      id: 3,
      label: 'შოპინგი',
      value: "shoping"
    },
    {
      id: 4,
      label: 'ჯანმრთელობა',
      value: "health"
    },
    {
      id: 5,
      label: 'საოჯახო',
      value: "home"
    },
    {
      id: 6,
      label: 'სხვა',
      value: "ather"
    }
  ];



  return (
    <div className='filters__container'>
      <section>
      <LabelInput
        id={1}
        labelText='თარიღი:'
        type={'date'}
        name={'date-filter'}
        value={selectedDate}
        onChange={onSelectedDate}
      /></section>
      <div>
        <section>
        <Select
          defaultValue="lucy"
          value={selectedCategory}
          text='კატეგორია:'
          options={options}
          onChange={(e) => setSelectedCategory(e)}
        /></section>
      </div>
      <div className='amount__filters_container'>
        <section>
        <LabelInput
          id={3}
          labelText='მინ:'
          type={'number'}
          name={'amount-min-filter'}
          value={minAmount}
          onChange={onMinAmountChange}
        /></section>
        <section>
        <LabelInput
          id={4}
          labelText='მაქს:'
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