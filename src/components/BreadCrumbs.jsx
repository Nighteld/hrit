import { NavLink } from "react-router";



  


export default function BreadCrumbs({menuLists}){
    return (
        <ul className="bread-crumbs">
        {menuLists.map((component) => (
          <li
            key={component.title}
            title={component.title}
            to={component.href}
            className="p-1 ml-10 "
          >
            <NavLink to={component.href} key={component.title}>
              {component.title}
            </NavLink>
          </li>
        ))}
      </ul>

    )
}