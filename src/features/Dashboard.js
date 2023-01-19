import React from 'react'

export default function Dashboard() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                <div className="col-lg-4 col-md-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <div className="display-7">
                                    <i className="bi bi-basket"></i>
                                </div>
                                <div className="dropdown ms-auto">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="bi bi-three-dots"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#" className="dropdown-item">View Detail</a>
                                        <a href="#" className="dropdown-item">Download</a>
                                    </div>
                                </div>
                            </div>
                            <h4 className="mb-3">Orders</h4>
                            <div className="d-flex mb-3">
                                <div className="display-7">310</div>
                                <div className="ms-auto" id="total-orders"></div>
                            </div>
                            <div className="text-success">
                                Over last month 1.4% <i className="small bi bi-arrow-up"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <div className="display-7">
                                    <i className="bi bi-credit-card-2-front"></i>
                                </div>
                                <div className="dropdown ms-auto">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="bi bi-three-dots"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#" className="dropdown-item">View Detail</a>
                                        <a href="#" className="dropdown-item">Download</a>
                                    </div>
                                </div>
                            </div>
                            <h4 className="mb-3">Sales</h4>
                            <div className="d-flex mb-3">
                                <div className="display-7">$3.759,00</div>
                                <div className="ms-auto" id="total-sales"></div>
                            </div>
                            <div className="text-danger">
                                Over last month 2.4% <i className="small bi bi-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-4">
                                <h6 className="card-title">Recent Reviews</h6>
                                <div className="dropdown ms-auto">
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            <div className="summary-cards">
                                <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar me-3">
                                            <img src="../../assets/images/user/women_avatar5.jpg" className="rounded-circle"
                                                alt="image" />
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Amara Keel</h5>
                                            <ul className="list-inline ms-auto mb-0">
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-muted"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">(4)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>I love your products. It is very easy and fun to use this panel.</div>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar me-3">
                                            <span className="avatar-text bg-indigo rounded-circle">J</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Johnath Siddeley</h5>
                                            <ul className="list-inline ms-auto mb-0">
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">(5)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>Very nice glasses. I ordered for my friend.</div>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar me-3">
                                            <span className="avatar-text bg-yellow rounded-circle">D</span>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">David Berks</h5>
                                            <ul className="list-inline ms-auto mb-0">
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li className="list-inline-item mb-0">(5)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>I am very satisfied with this product.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex mb-4">
                                <h6 className="card-title mb-0">Customer Rating</h6>
                                <div className="dropdown ms-auto">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="bi bi-three-dots"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#" className="dropdown-item">View Detail</a>
                                        <a href="#" className="dropdown-item">Download</a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="display-6">3.0</div>
                                <div className="d-flex justify-content-center gap-3 my-3">
                                    <i className="bi bi-star-fill icon-lg text-warning"></i>
                                    <i className="bi bi-star-fill icon-lg text-warning"></i>
                                    <i className="bi bi-star-fill icon-lg text-warning"></i>
                                    <i className="bi bi-star-fill icon-lg text-muted"></i>
                                    <i className="bi bi-star-fill icon-lg text-muted"></i>
                                    <span>(318)</span>
                                </div>
                            </div>
                            <div className="text-muted d-flex align-items-center justify-content-center">
                                <span className="text-success me-3 d-block">
                                    <i className="bi bi-arrow-up me-1 small"></i>+35
                                </span> Point from last month
                            </div>
                            <div className="row my-4">
                                <div className="col-md-6 m-auto">
                                    <div id="customer-rating"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-outline-primary btn-icon">
                                    <i className="bi bi-download"></i> Download Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 bg-purple">
                        <div className="card-body text-center">
                            <div className="text-white-50">
                                <div className="bi bi-box-seam display-6 mb-3"></div>
                                <div className="display-8 mb-2">Products Sold</div>
                                <h5>89 Sold</h5>
                            </div>
                            <div id="products-sold"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card widget h-100">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title">
                                Your Top Countries
                                <a href="#" className="bi bi-question-circle ms-1 small" data-bs-toggle="tooltip"
                                    title="Sales performance revenue based by country"></a>
                            </h5>
                            <a href="#">View All</a>
                        </div>
                        <div className="card-body">
                            <div className="list-group list-group-flush">
                                <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <div className="d-flex flex-grow-1 align-items-center">
                                        <img width="45" className="me-3"
                                            src="https://vetra.laborasyon.com/assets/flags/united-states-of-america.svg" alt="..." />
                                        <span>United States</span>
                                    </div>
                                    <span>$1.671,10</span>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <div className="d-flex flex-grow-1 align-items-center">
                                        <img width="45" className="me-3" src="https://vetra.laborasyon.com/assets/flags/venezuela.svg" alt="..." />
                                        <span>Venezuela</span>
                                    </div>
                                    <span>$1.064,75</span>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <div className="d-flex flex-grow-1 align-items-center">
                                        <img width="45" className="me-3" src="https://vetra.laborasyon.com/assets/flags/salvador.svg" alt="..." />
                                        <span>Salvador</span>
                                    </div>
                                    <span>$1.055,98</span>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <div className="d-flex flex-grow-1 align-items-center">
                                        <img width="45" className="me-3" src="https://vetra.laborasyon.com/assets/flags/russia.svg" alt="..." />
                                        <span>Russia</span>
                                    </div>
                                    <span>$1.042,00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="card widget">
                        <div className="card-header">
                            <h5 className="card-title">Activity Overview</h5>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <div className="display-5">
                                            <i className="bi bi-truck text-secondary"></i>
                                        </div>
                                        <h5 className="my-3">Delivered</h5>
                                        <div className="text-muted">15 New Packages</div>
                                        <div className="progress mt-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <div className="display-5">
                                            <i className="bi bi-receipt text-warning"></i>
                                        </div>
                                        <h5 className="my-3">Ordered</h5>
                                        <div className="text-muted">72 New Items</div>
                                        <div className="progress mt-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '67%' }}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <div className="display-5">
                                            <i className="bi bi-bar-chart text-info"></i>
                                        </div>
                                        <h5 className="my-3">Reported</h5>
                                        <div className="text-muted">50 Support New Cases</div>
                                        <div className="progress mt-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <div className="display-5">
                                            <i className="bi bi-cursor text-success"></i>
                                        </div>
                                        <h5 className="my-3">Arrived</h5>
                                        <div className="text-muted">34 Upgraded Boxed</div>
                                        <div className="progress mt-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '55%' }}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="card widget">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <h5 className="card-title">Recent Products</h5>
                            <div className="dropdown ms-auto">
                                <a href="#" data-bs-toggle="dropdown" className="btn btn-sm btn-floating" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">Action</a>
                                    <a href="#" className="dropdown-item">Another action</a>
                                    <a href="#" className="dropdown-item">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="text-muted">Products added today. Click <a href="#">here</a> for more details</p>
                            <div className="table-responsive">
                                <table className="table table-custom mb-0" id="recent-products">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input className="form-check-input select-all" type="checkbox"
                                                    data-select-all-target="#recent-products" id="defaultCheck1" />
                                            </th>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Stock</th>
                                            <th>Price</th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className="form-check-input" type="checkbox" />
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <img src="../../assets/images/products/10.jpg" className="rounded" width="40"
                                                        alt="..." />
                                                </a>
                                            </td>
                                            <td>Cookie</td>
                                            <td>
                                                <span className="text-danger">Out of Stock</span>
                                            </td>
                                            <td>$10,50</td>
                                            <td className="text-end">
                                                <div className="d-flex">
                                                    <div className="dropdown ms-auto">
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            className="btn btn-floating"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item">Action</a>
                                                            <a href="#" className="dropdown-item">Another action</a>
                                                            <a href="#" className="dropdown-item">Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input className="form-check-input" type="checkbox" />
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <img src="../../assets/images/products/7.jpg" className="rounded" width="40"
                                                        alt="..." />
                                                </a>
                                            </td>
                                            <td>Glass</td>
                                            <td>
                                                <span className="text-success">In Stock</span>
                                            </td>
                                            <td>$70,20</td>
                                            <td className="text-end">
                                                <div className="d-flex">
                                                    <div className="dropdown ms-auto">
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            className="btn btn-floating"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item">Action</a>
                                                            <a href="#" className="dropdown-item">Another action</a>
                                                            <a href="#" className="dropdown-item">Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input className="form-check-input" type="checkbox" />
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <img src="../../assets/images/products/8.jpg" className="rounded" width="40"
                                                        alt="..." />
                                                </a>
                                            </td>
                                            <td>Headphone</td>
                                            <td>
                                                <span className="text-success">In Stock</span>
                                            </td>
                                            <td>$870,50</td>
                                            <td className="text-end">
                                                <div className="d-flex">
                                                    <div className="dropdown ms-auto">
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            className="btn btn-floating"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item">Action</a>
                                                            <a href="#" className="dropdown-item">Another action</a>
                                                            <a href="#" className="dropdown-item">Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input className="form-check-input" type="checkbox" />
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <img src="../../assets/images/products/9.jpg" className="rounded" width="40"
                                                        alt="..." />
                                                </a>
                                            </td>
                                            <td>Perfume</td>
                                            <td>
                                                <span className="text-success">In Stock</span>
                                            </td>
                                            <td>$170,50</td>
                                            <td className="text-end">
                                                <div className="d-flex">
                                                    <div className="dropdown ms-auto">
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            className="btn btn-floating"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item">Action</a>
                                                            <a href="#" className="dropdown-item">Another action</a>
                                                            <a href="#" className="dropdown-item">Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
