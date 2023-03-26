import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className="header w-full h-16 bg-gray-900 flex items-center text-white">

        <div className="header__logo w-1/5 ml-10 ">
            <img loading="lazy" className="w-28 mt-1.5 object-contain"  alt=""
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </div>
        
        <div className="header__search w-full flex">
            <input id="search" type="text" placeholder="Search..."
                className="header__searchInput w-full text-gray-800 focus:outline-none placeholder-gray border border-opacity-75 rounded-l-xl px-3" />
            <div class="search-icon h-9 w-10 bg-yellow-500 rounded-r-xl flex justify-center items-center text-white">
                <SearchIcon />
            </div>
        </div>

        <div className="header__nav w-2/5 flex  justify-end">
            
            <div className="header__option mx-1">
                <p className="header__optionLineOne text-xs">Hello Guest</p>
                <p className="header__optionLineTwo text-xs font-bold">Sign In</p>
            </div>
            
            <div className="header__option mx-1">
                <p className="header__optionLineOne text-xs">Returns</p>
                <p className="header__optionLineTwo text-xs font-bold">& Orders</p>
            </div>
            
            <div className="header__option mx-1">
                <p className="header__optionLineOne text-xs">Your</p>
                <p className="header__optionLineTwo text-xs font-bold">Prime</p>
            </div>

            
            <div className="header__optionBasket mx-1 flex items-center">
                <ShoppingBasketIcon className="mx-1"/>
                <span className="header__optionLineTwo header__basketCount mx-2 text-sm font-bold">
                0
                </span>
            </div>
            
        </div>
    </div>
    );
};

export default Header;
