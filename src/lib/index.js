import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import Page from './components/Page.react';
import Navbar from './components/Navbar.react';
import Sidebar from './components/sidebar/Sidebar.react';
import SidebarMenu from './components/sidebar/SidebarMenu.react';
import SidebarHeader from './components/sidebar/SidebarHeader.react';
import MenuItem from './components/sidebar/MenuItem.react';
import MenuSubItem from './components/sidebar/MenuSubItem.react';
import Body from './components/Body.react';
import Controlbar from './components/Controlbar.react';
import Footer from './components/Footer.react';
import TabItems from './components/tabitems/TabItems.react';
import TabItem from './components/tabitems/TabItem.react';
import Box from './components/box/Box.react';
import BoxHeader from './components/box/BoxHeader.react';
import BoxHeaderCollapseButton from './components/box/BoxHeaderCollapseButton.react';
import BoxHeaderCloseButton from './components/box/BoxHeaderCloseButton.react';
import BoxHeaderTools from './components/box/BoxHeaderTools.react';
import BoxBody from './components/box/BoxBody.react';
import BoxFooter from './components/box/BoxFooter.react';
import SimpleBox from './components/SimpleBox.react';
import UserCard from './components/UserCard.react';
import InfoBox from './components/InfoBox.react';
import ValueBox from './components/ValueBox.react';
import Icon from './components/icon/Icon.react';
import DropdownDivider from './components/dropdowns/DropdownDivider.react';
import DropdownItem from './components/dropdowns/DropdownItem.react';
import DropdownMenu from './components/dropdowns/DropdownMenu.react';
import DropdownMenuItem from './components/dropdowns/DropdownMenuItem.react';

export {
    Page, 
	Navbar, 
	Sidebar,
	SidebarMenu, 
	SidebarHeader, 
	MenuItem, 
	MenuSubItem,
	Body,
	Controlbar,
	Footer,
	TabItems,
	TabItem, 
	Box, 
	BoxHeader, 
	BoxHeaderCollapseButton, 
	BoxHeaderCloseButton, 
	BoxHeaderTools,
	BoxBody, 
	BoxFooter,
	SimpleBox, 
	UserCard,
	InfoBox, 
	ValueBox,
	Icon,
	DropdownDivider,
	DropdownItem,
	DropdownMenu,
	DropdownMenuItem
};
