import React from 'react'

function Menu(props) {
  return (
    <div>
<div><img src='{props.img}'/></div>
<div>
<h5>{props.title}</h5>
<b>{props.price}</b>
<p>{props.desc}</p>
</div>
<button name='Order Now'/>
    </div>
  )
}

export default Menu