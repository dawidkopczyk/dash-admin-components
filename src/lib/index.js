import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import Page from './components/Page.react';
import Navbar from './components/navbar/Navbar.react';
import NavbarDropdown from './components/navbar/NavbarDropdown.react';
import NavbarDropdownItem from './components/navbar/NavbarDropdownItem.react';
import Sidebar from './components/sidebar/Sidebar.react';
import SidebarMenu from './components/sidebar/SidebarMenu.react';
import SidebarHeader from './components/sidebar/SidebarHeader.react';
import SidebarMenuItem from './components/sidebar/SidebarMenuItem.react';
import SidebarMenuSubItem from './components/sidebar/SidebarMenuSubItem.react';
import SidebarButton from './components/sidebar/SidebarButton.react';
import Body from './components/Body.react';
import Controlbar from './components/Controlbar.react';
import Footer from './components/Footer.react';
import TabItems from './components/tabitems/TabItems.react';
import TabItem from './components/tabitems/TabItem.react';
import Box from './components/box/Box.react';
import BoxHeader from './components/box/BoxHeader.react';
import BoxDropdown from './components/box/BoxDropdown.react';
import BoxDropdownDivider from './components/box/BoxDropdownDivider.react';
import BoxDropdownItem from './components/box/BoxDropdownItem.react';
import BoxBody from './components/box/BoxBody.react';
import BoxFooter from './components/box/BoxFooter.react';
import TabBox from './components/tabbox/TabBox.react';
import TabBoxHeader from './components/tabbox/TabBoxHeader.react';
import TabBoxMenu from './components/tabbox/TabBoxMenu.react';
import TabBoxMenuItem from './components/tabbox/TabBoxMenuItem.react';
import TabBoxBody from './components/tabbox/TabBoxBody.react';
import SimpleBox from './components/SimpleBox.react';
import UserCard from './components/UserCard.react';
import InfoBox from './components/InfoBox.react';
import ValueBox from './components/ValueBox.react';
import Icon from './components/icon/Icon.react';

export {
    Page, 
	Navbar,
	NavbarDropdown,
	NavbarDropdownItem,	
	Sidebar,
	SidebarMenu, 
	SidebarHeader, 
	SidebarMenuItem, 
	SidebarMenuSubItem,
	SidebarButton,
	Body,
	Controlbar,
	Footer,
	TabItems,
	TabItem, 
	Box, 
	BoxHeader,  
	BoxDropdown,
	BoxDropdownDivider,
	BoxDropdownItem,
	BoxBody, 
	BoxFooter,
	TabBox,
	TabBoxHeader,
	TabBoxMenu,
	TabBoxMenuItem,
	TabBoxBody,
	SimpleBox, 
	UserCard,
	InfoBox, 
	ValueBox,
	Icon,
};
