import React from 'react'

export default function OrderDetails() {
    return (
        <>
            <div className="mb-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">
                                <i className="bi bi-globe2 small me-2"></i> Dashboard
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Order Detail</li>
                    </ol>
                </nav>
            </div>

            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="mb-5 d-flex align-items-center justify-content-between">
                                <span>Order No : <a href="#">#5355619</a></span>
                                <span className="badge bg-success">Completed</span>
                            </div>
                            <div className="row mb-5 g-4">
                                <div className="col-md-3 col-sm-6">
                                    <p className="fw-bold">Order Created at</p>
                                    16/06/2021 at 04:23 PM
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="fw-bold">Name</p>
                                    Sayres Seater
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="fw-bold">Email</p>
                                    sayres@sayres.com
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="fw-bold">Contact No</p>
                                    767-251-8637
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body d-flex flex-column gap-3">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="mb-0">Delivery Address</h5>
                                                <a href="#">Edit</a>
                                            </div>
                                            <div>Name: Home</div>
                                            <div>Josephin Villa</div>
                                            <div>81 Fulton Park, Brazil/Pedro Leopoldo</div>
                                            <div>
                                                <i className="bi bi-telephone me-2"></i> 408-963-7769
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-body d-flex flex-column gap-3">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="mb-0">Billing Address</h5>
                                                <a href="#">Edit</a>
                                            </div>
                                            <div>Name: Workplace</div>
                                            <div>Josephin Villa</div>
                                            <div>29543 South Plaza, Canada/Sydney Mines</div>
                                            <div>
                                                <i className="bi bi-telephone me-2"></i> 484-948-8535
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card widget">
                        <h5 className="card-header">Order Items</h5>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-custom mb-0">
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    <img src="../../assets/images/products/3.jpg" className="rounded" width="60" alt="..." />
                                                </a>
                                            </td>
                                            <td>Digital clock</td>
                                            <td>1</td>
                                            <td>$1.190,90</td>
                                            <td>$1.190,90</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    <img src="../../assets/images/products/4.jpg" className="rounded" width="60" alt="..." />
                                                </a>
                                            </td>
                                            <td>Toy car</td>
                                            <td>2</td>
                                            <td>$139,58</td>
                                            <td>$279,16</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    <img src="../../assets/images/products/5.jpg" className="rounded" width="60" alt="..." />
                                                </a>
                                            </td>
                                            <td>Sunglasses</td>
                                            <td>1</td>
                                            <td>$50,90</td>
                                            <td>$50,90</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h6 className="card-title mb-4">Price</h6>
                            <div className="row justify-content-center mb-3">
                                <div className="col-4 text-end">Sub Total :</div>
                                <div className="col-4">$1.520,96</div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-4 text-end">Shipping :</div>
                                <div className="col-4">Free</div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-4 text-end">Tax(18%) :</div>
                                <div className="col-4">$273,77</div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-4 text-end">
                                    <strong>Total :</strong>
                                </div>
                                <div className="col-4">
                                    <strong>$1.794,73</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title mb-4">Invoice</h6>
                            <div className="row justify-content-center mb-3">
                                <div className="col-6 text-end">Invoice No :</div>
                                <div className="col-6">
                                    <a href="#">#5355619</a>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-6 text-end">Seller GST :</div>
                                <div className="col-6">12HY87072641Z0</div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-6 text-end">Purchase GST :</div>
                                <div className="col-6">22HG9838964Z1</div>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-outline-primary">Download PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
