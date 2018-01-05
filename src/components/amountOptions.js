import React from 'react';

const Options = (props) => {
  return(
    <select className="form-control" name="amount"  onChange={props.onChange} required>
      <option></option>
      <option value="5">McDonald's 20 pcs Chicken McNuggets</option>
      <option value="999">64GB iPhone X</option>
      <option value="724.99">Samsung Galaxy S8</option>
      <option value="4.45">Starbuck's Tall Pumpkin Spice Latte</option>
      <option value="10.99">One Month of Netflix</option>
      <option value="199.99">Xbox One</option>
      <option value="119800">2018 BMW M6 Gran Coupe</option>
      <option value="179">Amazon Echo</option>



    </select>
)
}

export default Options
