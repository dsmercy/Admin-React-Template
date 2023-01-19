import React from 'react'

export default function ProductList() {
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
                        <li className="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                </nav>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-md-flex gap-4 align-items-center">
                                <div className="d-none d-md-flex">All Products</div>
                                <div className="d-md-flex gap-4 align-items-center">
                                    <form className="mb-3 mb-md-0">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <select className="form-select">
                                                    <option>Sort by</option>
                                                    <option value="desc">Desc</option>
                                                    <option value="asc">Asc</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <select className="form-select">
                                                    <option value="10">10</option>
                                                    <option value="20">20</option>
                                                    <option value="30">30</option>
                                                    <option value="40">40</option>
                                                    <option value="50">50</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="dropdown ms-auto">
                                    <a href="#" data-bs-toggle="dropdown"
                                        className="btn btn-primary dropdown-toggle"
                                        aria-haspopup="true" aria-expanded="false">Actions</a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#" className="dropdown-item">Action</a>
                                        <a href="#" className="dropdown-item">Another action</a>
                                        <a href="#" className="dropdown-item">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-custom table-lg mb-0" id="products">
                            <thead>
                                <tr>
                                    <th>
                                        <input className="form-check-input select-all" type="checkbox"
                                            data-select-all-target="#products" id="defaultCheck1"/>
                                    </th>
                                    <th>ID</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Created At</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#1</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/1.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Headphone</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$499,90</td>
                                    <td>02/03/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#2</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/2.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Shoe</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$500,30</td>
                                    <td>19/04/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#3</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/3.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Digital clock</td>
                                    <td>
                                        <span className="text-danger">Out of Stock</span>
                                    </td>
                                    <td>$1.190,90</td>
                                    <td>30/05/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#4</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/4.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Toy car</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$50,90</td>
                                    <td>25/03/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#5</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/5.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Sunglasses</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$50,90</td>
                                    <td>28/03/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#6</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/6.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Cake</td>
                                    <td>
                                        <span className="text-danger">Out of Stock</span>
                                    </td>
                                    <td>$10,50</td>
                                    <td>05/04/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#7</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/7.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Glass</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$70,20</td>
                                    <td>22/04/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#8</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/8.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Headphone</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$870,50</td>
                                    <td>24/04/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#9</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/9.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Perfume</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$170,50</td>
                                    <td>24/04/2021</td>
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
                                        <input className="form-check-input" type="checkbox"/>
                                    </td>
                                    <td>
                                        <a href="#">#10</a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <img src="../../assets/images/products/10.jpg" className="rounded" width="40"
                                                alt="..."/>
                                        </a>
                                    </td>
                                    <td>Cookie</td>
                                    <td>
                                        <span className="text-success">In Stock</span>
                                    </td>
                                    <td>$15,00</td>
                                    <td>24/04/2021</td>
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
                    <nav className="mt-4" aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-4">
                    <h5 className="mb-4">Filter Products</h5>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
                                aria-expanded="true" data-bs-target="#keywordsCollapseExample" role="button">
                                <div>Keywords</div>
                                <div className="bi bi-chevron-down"></div>
                            </div>
                            <div className="collapse show mt-4" id="keywordsCollapseExample">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Phone, Headphone, Shoe ..."/>
                                        <button className="btn btn-outline-light" type="button">
                                            <i className="bi bi-search"></i>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
                                aria-expanded="true" data-bs-target="#categoriesCollapseExample" role="button">
                                <div>Categories</div>
                                <div className="bi bi-chevron-down"></div>
                            </div>
                            <div className="collapse show mt-4" id="categoriesCollapseExample">
                                <div className="d-flex flex-column gap-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="categoryCheck1"/>
                                            <label className="form-check-label" for="categoryCheck1">
                                                All
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="categoryCheck2"/>
                                            <label className="form-check-label" for="categoryCheck2">
                                                Accessories
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="categoryCheck3"/>
                                            <label className="form-check-label" for="categoryCheck3">
                                                Phone
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="categoryCheck4"/>
                                            <label className="form-check-label" for="categoryCheck4">
                                                Headphone
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="categoryCheck5"/>
                                            <label className="form-check-label" for="categoryCheck5">
                                                Camera
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
                                aria-expanded="true" data-bs-target="#priceCollapseExample" role="button">
                                <div>Price</div>
                                <div className="bi bi-chevron-down"></div>
                            </div>
                            <div className="collapse show mt-4" id="priceCollapseExample">
                                <input id="price-filter" />
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
                                aria-expanded="true" data-bs-target="#colorsCollapseExample" role="button">
                                <div>Colors</div>
                                <div className="bi bi-chevron-down"></div>
                            </div>
                            <div className="collapse show mt-4" id="colorsCollapseExample">
                                <div className="color-filter-group d-flex gap-3">
                                    <input className="form-check-input" type="checkbox" value="#1fa0c6" aria-label="..."/>
                                        <input className="form-check-input" type="checkbox" checked value="green" aria-label="..."/>
                                            <input className="form-check-input" type="checkbox" checked value="#c61faa" aria-label="..."/>
                                                <input className="form-check-input" type="checkbox" value="#1fc662" aria-label="..."/>
                                                    <input className="form-check-input" type="checkbox" value="#9dc61f" aria-label="..."/>
                                                        <input className="form-check-input" type="checkbox" checked value="#c67b1f" aria-label="..."/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </>
                            )
}
