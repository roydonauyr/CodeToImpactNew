import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'

export const panels = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text',
  },
  {
    id: 2,
    title: 'Instrument',
    path: '/instrument',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text',
  },
  {
    id: 3,
    title: 'My Portfolio',
    path: '/my-portfolio',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    id: 4,
    title: 'Market Valuation',
    path: '/market',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'nav-text',
  },
  {
    id: 5,
    title: 'Transaction',
    path: '/transaction',
    icon: <AiIcons.AiOutlineTransaction />,
    cName: 'nav-text',
  },
]

export default { panels }
