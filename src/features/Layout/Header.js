import { useState } from "react";
import { Link } from "react-router-dom";
import OrdersList from "../orders/OrdersList";

export default function Header() {

    const [active, setActive] = useState(1);

    const handleActiveLink = (id) => {
        setActive(id);
    }

    return (
        <>
            <div className="menu">
                <div className="menu-header">
                    <a href="index.html" className="menu-header-logo">
                        <img src="https://vetra.laborasyon.com/assets/images/logo.svg" alt="logo" />
                    </a>
                    <a href="index.html" className="btn btn-sm menu-close-btn">
                        <i className="bi bi-x"></i>
                    </a>
                </div>
                <div className="menu-body">
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center" data-bs-toggle="dropdown">
                            <div className="avatar me-3">
                                <img src="../../assets/images/user/man_avatar3.jpg"
                                    className="rounded-circle" alt="image" />
                            </div>
                            <div>
                                <div className="fw-bold">Timotheus Bendan</div>
                                <small className="text-muted">Sales Manager</small>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item d-flex align-items-center">
                                <i className="bi bi-person dropdown-item-icon"></i> Profile
                            </a>
                            <a href="#" className="dropdown-item d-flex align-items-center">
                                <i className="bi bi-envelope dropdown-item-icon"></i> Inbox
                            </a>
                            <a href="#" className="dropdown-item d-flex align-items-center" data-sidebar-target="#settings">
                                <i className="bi bi-gear dropdown-item-icon"></i> Settings
                            </a>
                            <a href="login.html" className="dropdown-item d-flex align-items-center text-danger"
                                target="_blank">
                                <i className="bi bi-box-arrow-right dropdown-item-icon"></i> Logout
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li className="menu-divider">E-Commerce</li>
                        <li>
                            <Link to='/' onClick={() => handleActiveLink(1)} className={`${active == 1 ? 'active' : ''}`}>
                                <span className="nav-link-icon">
                                    <i className="bi bi-bar-chart"></i>
                                </span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-receipt"></i>
                                </span>
                                <span>Orders</span>
                            </a>
                            <ul>
                                <li>
                                    <Link to='orders' onClick={() => handleActiveLink(2)} className={`${active == 2 ? 'active' : ''}`}>List</Link>
                                </li>
                                <li>
                                    <Link to='ordersdetails' onClick={() => handleActiveLink(3)} className={`${active == 3 ? 'active' : ''}`}>Detail</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-truck"></i>
                                </span>
                                <span>Products</span>
                            </a>
                            <ul>
                                <li>
                                    <Link to='products' onClick={() => handleActiveLink(4)} className={`${active == 4 ? 'active' : ''}`}>List</Link>
                                </li>
                                <li>
                                    <Link to='productdetails' onClick={() => handleActiveLink(5)} className={`${active == 5 ? 'active' : ''}`}>Details</Link>
                                </li>
                                <li>
                                <Link to='addproduct' onClick={() => handleActiveLink(6)} className={`${active == 6 ? 'active' : ''}`}>Add</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="customers.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-person-badge"></i>
                                </span>
                                <span>Customers</span>
                            </a>
                        </li>
                        
                        <li className="menu-divider">Apps</li>
                        <li>
                            <a href="chats.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-chat-square"></i>
                                </span>
                                <span>Chats</span>
                                <span className="badge bg-success rounded-circle ms-auto">2</span>
                            </a>
                        </li>
                        <li>
                            <a href="email.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-envelope"></i>
                                </span>
                                <span>Email</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="email.html">
                                        <span>Inbox</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="email-detail.html">
                                        <span>Detail</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="email-template.html">
                                        <span>Email Template</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="todo-list.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-check-circle"></i>
                                </span>
                                <span>Todo App</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="todo-list.html">
                                        <span>List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="todo-detail.html">
                                        <span>Details</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-divider">Pages</li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-person"></i>
                                </span>
                                <span>Profile</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="profile-posts.html">Post</a>
                                </li>
                                <li>
                                    <a href="profile-connections.html">Connections</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <span>Users</span>
                            </a>
                            <ul>
                                <li><a href="user-list.html">List View</a></li>
                                <li><a href="user-grid.html">Grid View</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-lock"></i>
                                </span>
                                <span>Authentication</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="login.html" target="_blank">Login</a>
                                </li>
                                <li>
                                    <a href="register.html" target="_blank">Register</a>
                                </li>
                                <li>
                                    <a href="reset-password.html" target="_blank">Reset Password</a>
                                </li>
                                <li>
                                    <a href="lock-screen.html" target="_blank">Lock Screen</a>
                                </li>
                                <li>
                                    <a href="account-verified.html" target="_blank">Account Verified</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-exclamation-octagon"></i>
                                </span>
                                <span>Error Pages</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="404.html" target="_blank">404</a>
                                </li>
                                <li>
                                    <a href="access-denied.html">Access Denied</a>
                                </li>
                                <li>
                                    <a href="under-construction.html" target="_blank">Under Construction</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="settings.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-gear"></i>
                                </span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="pricing-table.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-wallet2"></i>
                                </span>
                                <span>Pricing Table</span>
                                <span className="badge bg-success ms-auto">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="search-page.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-search"></i>
                                </span>
                                <span>Search Page</span>
                            </a>
                        </li>
                        <li>
                            <a href="faq.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-question-circle"></i>
                                </span>
                                <span>FAQ</span>
                            </a>
                        </li>
                        <li className="menu-divider">User Interface</li>
                        <li>
                            <a href="#" target="_blank">
                                <span className="nav-link-icon">
                                    <i className="bi bi-file-earmark-text"></i>
                                </span>
                                <span>Components</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="accordion.html">Accordion</a>
                                </li>
                                <li>
                                    <a href="alert.html">Alerts</a>
                                </li>
                                <li>
                                    <a href="badge.html">Badge</a>
                                </li>
                                <li>
                                    <a href="breadcrumb.html">Breadcrumb</a>
                                </li>
                                <li>
                                    <a href="buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="button-group.html">Button Group</a>
                                </li>
                                <li>
                                    <a href="card.html">Card</a>
                                </li>
                                <li>
                                    <a href="card-masonry.html">Card Masonry</a>
                                </li>
                                <li>
                                    <a href="carousel.html">Carousel</a>
                                </li>
                                <li>
                                    <a href="collapse.html">Collapse</a>
                                </li>
                                <li>
                                    <a href="dropdown.html">Dropdowns</a>
                                </li>
                                <li>
                                    <a href="list-group.html">List Group</a>
                                </li>
                                <li>
                                    <a href="modal.html">Modal</a>
                                </li>
                                <li>
                                    <a href="navs-tabs.html">Navs and Tabs</a>
                                </li>
                                <li>
                                    <a href="pagination.html">Pagination</a>
                                </li>
                                <li>
                                    <a href="popovers.html">Popovers</a>
                                </li>
                                <li>
                                    <a href="progress.html">Progress</a>
                                </li>
                                <li>
                                    <a href="spinners.html">Spinners</a>
                                </li>
                                <li>
                                    <a href="toasts.html">Toasts</a>
                                </li>
                                <li>
                                    <a href="tables.html">
                                        <span>Tables</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tooltip.html">Tooltip</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <span className="nav-link-icon">
                                    <i className="bi bi-file-earmark-text"></i>
                                </span>
                                <span>Forms</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span>Form Elements</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="forms.html">Overview</a>
                                        </li>
                                        <li>
                                            <a href="form-control.html">Form Controls</a>
                                        </li>
                                        <li>
                                            <a href="select.html">Select</a>
                                        </li>
                                        <li>
                                            <a href="checks-radios.html">Checks and Radios</a>
                                        </li>
                                        <li>
                                            <a href="range.html">Range</a>
                                        </li>
                                        <li>
                                            <a href="input-group.html">Input Group</a>
                                        </li>
                                        <li>
                                            <a href="floating-label.html">Floating Label</a>
                                        </li>
                                        <li>
                                            <a href="forms-layout.html">Form Layout</a>
                                        </li>
                                        <li>
                                            <a href="form-validation.html">Validation</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="form-wizard.html">
                                        <span>Wizard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="form-repeater.html">
                                        <span>Repeater</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="file-upload.html">
                                        <span>File Upload</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ckeditor.html">
                                        <span>CKEditor</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="range-slider.html">
                                        <span>Range Slider</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="select2.html">
                                        <span>Select2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tags-input.html">
                                        <span>Tags Input</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="input-mask.html">
                                        <span>Input Mask</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="datepicker.html">
                                        <span>Datepicker</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="clockpicker.html">
                                        <span>Clock Picker</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-heart"></i>
                                </span>
                                <span>Content</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="typography.html">
                                        <span>Typography</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="images.html">
                                        <span>Images</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="figures.html">
                                        <span>Figures</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="avatar.html">
                                        <span>Avatar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="icons.html">
                                        <span>Icons</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="colors.html">
                                        <span>Colors</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-bar-chart"></i>
                                </span>
                                <span>Charts</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="apexchart.html">Apex Chart</a>
                                </li>
                                <li>
                                    <a href="chartjs.html">Chartjs</a>
                                </li>
                                <li>
                                    <a href="justgage.html">Justgage</a>
                                </li>
                                <li>
                                    <a href="morsis.html">Morsis</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-paperclip"></i>
                                </span>
                                <span>Extensions</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="vector-map.html">
                                        <span>Vector Map</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="datatable.html">
                                        <span>Datatable</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="sweet-alert.html">Sweet Alert</a>
                                </li>
                                <li>
                                    <a href="lightbox.html">Lightbox</a>
                                </li>
                                <li>
                                    <a href="introjs.html">Introjs</a>
                                </li>
                                <li>
                                    <a href="nestable.html">Nestable</a>
                                </li>
                                <li>
                                    <a href="rating.html">Rating</a>
                                </li>
                                <li>
                                    <a href="code-highlighter.html">Code Highlighter</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-divider">Other</li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-list"></i>
                                </span>
                                <span>Menu Item</span>
                            </a>
                            <ul>
                                <li><a href="#">Menu Item 1</a></li>
                                <li>
                                    <a href="#">Menu Item 2</a>
                                    <ul>
                                        <li>
                                            <a href="#">Menu Item 2.1</a>
                                        </li>
                                        <li>
                                            <a href="#">Menu Item 2.2</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="disabled">
                                <span className="nav-link-icon">
                                    <i className="bi bi-hand-index-thumb"></i>
                                </span>
                                <span>Disabled</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}
