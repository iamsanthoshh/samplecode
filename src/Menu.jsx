import React from 'react'
import  './_menuItems.scss'
import './_variables.scss'
import './_navbar.scss'


const Menu = () => {
  return (
    <section className="list_menu_items">
      <ul className="list_menu">
        {list_menu_items.map((item) => (
          <li className="list_items" key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}

export default Menu