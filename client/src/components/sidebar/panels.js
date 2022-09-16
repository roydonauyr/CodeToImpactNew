import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'

const Panels = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text',
  },
  {
    title: 'Instrument',
    path: '/instrument',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text',
  },
  {
    title: 'My Portfolio',
    path: '/my-portfolio',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Market Valuation',
    path: '/market',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'nav-text',
  },
  {
    title: 'Transaction',
    path: '/transaction',
    icon: <AiIcons.AiOutlineTransaction />,
    cName: 'nav-text',
  },
]

export default Panels
