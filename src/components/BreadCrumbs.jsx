import { NavLink } from "react-router";



  


export default function BreadCrumbs({menuLists}){
    return (
        <ul className="bread-crumbs">
        {menuLists.map((component) => (
          <li
            key={component.title}
            title={component.title}
            to={component.href}
            className="px-2 py-1"
          >
            <NavLink to={component.href} key={component.title}>
              {component.title}
            </NavLink>
          </li>
        ))}
      </ul>

    )
}