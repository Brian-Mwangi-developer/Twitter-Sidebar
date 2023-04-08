import React from "react";
import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
//Icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//
import { Button } from "@material-ui/core";

import { useState } from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";

//Icons for Menu
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
//


function Sidebar(){
    const options = [
        {link:"Bookmarks", icon: <BookmarkBorderOutlinedIcon fontSize="0" />},
        { link: 'List', icon: <ListAltOutlinedIcon/> },
        { link: 'Topic', icon: <ChatOutlinedIcon/> },
        { link: 'Moments', icon: <OfflineBoltOutlinedIcon/> },
        { link: 'Newsletters', icon: <PostAddOutlinedIcon/> },
        { link: 'Twitter Ads', icon: <CallMadeOutlinedIcon/> },
        { link: 'Analytics', icon: <BarChartOutlinedIcon/> },
        { link: 'Settings', icon: <SettingsOutlinedIcon/> },
        { link: 'Help Center', icon: <HelpOutlineOutlinedIcon/> },
        { link: 'Display', icon: <BrushOutlinedIcon/> },
        { link: 'Keyboard shortcuts', icon: <AccessibilityNewOutlinedIcon/> },
    ]

    const [open, setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    };
    const handleClick = (event) =>{
        setOpen(true);
    }
    return(
        <div className="sidebar">
            <SidebarLink text="Home" Icon={HomeIcon}/>
            <SidebarLink text="Explore" Icon={SearchIcon} />
            <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
            <SidebarLink text="Mesages" Icon={MailOutlineIcon} />
            <SidebarLink text="BookMarks" Icon={BookmarkBorderIcon} />
            <SidebarLink text="Lists" Icon={ListAltIcon} />
            <SidebarLink text="Profile" Icon={PermIdentityIcon} />
            <Button onClick={handleClick} id="morelinks">
                <MoreHorizIcon /> <h2>More</h2>
            </Button>
            <Button id="tweet">
                Tweet
            </Button>

            <Menu
            id="long-menu"
            open={open}
            onClose={handleClose}>
                {options.map((option) => (
                <MenuItem key={option.link} onClick={handleClose}>
                    {option.icon} {option.link}
        </MenuItem>

    ))}

            </Menu>
        </div>
    );
}

export default Sidebar;