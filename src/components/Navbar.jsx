import {appleImg, bagImg, searchImg} from "../utils/index.js";
import {navLists} from "../constants/index.js";

const Navbar = () => {
  return (
      <header
          className={'w-full py-5 sm:px-10 px-5 flex justify-between items-center'}
      >
        <nav className={'w-full flex screen-max-width '}>
          <img alt={'Apple'} src={appleImg} width={14} height={18}/>
          <div className={'flex flex-1 justify-center max-sm:hidden'}>
            {
              navLists.map(navItem => (
                  <div key={navItem}
                       className={'px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'}>
                    {navItem}
                  </div>
              ))
            }
          </div>

          <div className={'flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'}>
            <img alt={'Search Image'} src={searchImg} width={18} height={18}/>
            <img alt={'Bag Image'} src={bagImg} width={18} height={18}/>

          </div>
        </nav>
      </header>
  );
};

export default Navbar;
