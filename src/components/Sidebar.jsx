import React, { useState } from 'react';

const Sidebar = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isTaskOpen, setIsTaskOpen] = useState(false);
    const [isFormsOpen, setIsFormsOpen] = useState(false);
    const [isTablesOpen, setIsTablesOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        if (dropdown === 'dashboard') setIsDashboardOpen(!isDashboardOpen);
        else if (dropdown === 'task') setIsTaskOpen(!isTaskOpen);
        else if (dropdown === 'forms') setIsFormsOpen(!isFormsOpen);
        else if (dropdown === 'tables') setIsTablesOpen(!isTablesOpen);
        else if (dropdown === 'pages') setIsPagesOpen(!isPagesOpen);
        else if (dropdown === 'settings') setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <aside className="w-64 bg-gray-900 text-white h-full p-4 overflow-y-auto">
            {/* Logo */}
            <div className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                <span className="text-white">TailAdmin</span>
            </div>

            <div className="space-y-4">
                {/* Menu Header */}
                <p className="text-gray-400">MENU</p>

                {/* Dashboard Dropdown */}
                <div>
                    <button
                        onClick={() => toggleDropdown('dashboard')}
                        className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        <span>Dashboard</span>
                        <span>{isDashboardOpen ? '-' : '+'}</span>
                    </button>
                    {isDashboardOpen && (
                        <div className="ml-4 space-y-2 text-gray-300">
                            <p>eCommerce</p>
                            <div className="ml-4 space-y-1">
                                <p className="flex justify-between items-center">
                                    <span>Analytics</span>
                                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                                </p>
                                <p className="flex justify-between items-center">
                                    <span>Marketing</span>
                                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                                </p>
                                <p className="flex justify-between items-center">
                                    <span>CRM</span>
                                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                                </p>
                                <p className="flex justify-between items-center">
                                    <span>Stocks</span>
                                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Static Links */}
                <p className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">📅 Calendar</p>
                <p className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">👤 Profile</p>

                {/* Task Dropdown */}
                <div>
                    <button
                        onClick={() => toggleDropdown('task')}
                        className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        <span>Task</span>
                        <span>{isTaskOpen ? '-' : '+'}</span>
                    </button>
                    {isTaskOpen && (
                        <div className="ml-4 space-y-1 text-gray-300">
                            <p className="flex justify-between items-center">
                                <span>Lists</span>
                                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                            </p>
                            <p className="flex justify-between items-center">
                                <span>Kanban</span>
                                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Forms Dropdown */}
                <div>
                    <button
                        onClick={() => toggleDropdown('forms')}
                        className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        <span>Forms</span>
                        <span>{isFormsOpen ? '-' : '+'}</span>
                    </button>
                    {isFormsOpen && (
                        <div className="ml-4 space-y-1 text-gray-300">
                            <p>Form Elements</p>
                            <p className="flex justify-between items-center">
                                <span>Pro Form Elements</span>
                                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                            </p>
                            <p>Form Layout</p>
                            <p className="flex justify-between items-center">
                                <span>Pro Form Layout</span>
                                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Tables Dropdown */}
                <div>
                    <button
                        onClick={() => toggleDropdown('tables')}
                        className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        <span>Tables</span>
                        <span>{isTablesOpen ? '-' : '+'}</span>
                    </button>
                    {isTablesOpen && (
                        <div className="ml-4 space-y-1 text-gray-300">
                            <p>Basic Tables</p>
                            <p>Advanced Tables</p>
                        </div>
                    )}
                </div>

                {/* Pages Dropdown */}
                <div>
                    <button
                        onClick={() => toggleDropdown('pages')}
                        className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        <span>Pages</span>
                        <span>{isPagesOpen ? '-' : '+'}</span>
                    </button>
                    {isPagesOpen && (
                        <div className="ml-4 space-y-1 text-gray-300">
                            <p>Login</p>
                            <p>Register</p>
                            <p>Forgot Password</p>
                        </div>
                    )}
                </div>

                {/* Settings Dropdown */}
                <div>
                    <button
                        onClick={() => toggleDropdown('settings')}
                        className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        <span>Settings</span>
                        <span>{isSettingsOpen ? '-' : '+'}</span>
                    </button>
                    {isSettingsOpen && (
                        <div className="ml-4 space-y-1 text-gray-300">
                            <p>General</p>
                            <p>Notifications</p>
                            <p>Billing</p>
                            <p>Security</p>
                        </div>
                    )}
                </div>

                {/* Support Section */}
                <p className="text-gray-400 mt-8">SUPPORT</p>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                    <span>Messages</span>
                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">5 Pro</span>
                </div>
                <p className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                    <span>Inbox</span>
                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                </p>
                <p className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                    <span>Invoice</span>
                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">Pro</span>
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
