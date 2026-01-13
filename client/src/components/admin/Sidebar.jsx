import React ,{useContext} from 'react';
import {ShopContext} from '../../context/ShopContext';

export default function Sidebar(){
    const {navigate} = useContext(ShopContext);

    const navItems = [

        {
            path: "/admin",
            label: "Add Items",
            icon: <FaSquarePlus/>
        
        },
        {
            path: "/admin/list",
            label: "List",
            icon: <FaListAlt/>
        
        },
        {
            path: "/admin/orders",
            label: "Orders",
            icon: <MdFactCheck/>
        
        }



    ]



    return(


        <div>
            <div>
                <div>
                    <Link to={'/admin'}>
                    Shopprr <span>.</span>
                    </Link>
                    <div>
                        {

                            navItems.map((link)=>{
                             <NavLink to={link.path} key={link.label} end={link.path === '/admin'}>

                                {link.icon}
                                <div>{link.label}</div>
                             </NavLink>
                            })
                        }

                        <div>
                            <button>
                                <BiLogOut/>
                                <div>Logout</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}