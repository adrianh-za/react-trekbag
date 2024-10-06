import dots from '../assets/dots.png';

import { useItemsContext } from "../lib/hooks.js";

const Header = () => {
  const { items } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter
        checkedCount={items.filter(item => item.packed).length}
        totalCount={items.length}
      />
    </header>
  )
}

export default Header;

const Logo = () => {
  return (
    <img src={dots} alt="dots"/>
  )
}

const Counter = ( { checkedCount, totalCount }) => {
  return (
    <p><b>{checkedCount}</b>/{totalCount} items packed</p>
  )
}

