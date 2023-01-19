import React from 'react'

export default function ProductDetails() {
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
                <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
            </ol>
        </nav>
    </div>

    <div className="row">
        <div className="col-md-12">

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="slick-wrapper">
                                <div className="slider-for mb-3">
                                    <div className="slick-slide-item">
                                        <img src="../../assets/images/products/2.jpg" className="w-100 rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="slick-slide-item">
                                        <img src="../../assets/images/products/1.jpg" className="w-100 rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="slick-slide-item">
                                        <img src="../../assets/images/products/3.jpg" className="w-100 rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="slick-slide-item">
                                        <img src="../../assets/images/products/4.jpg" className="w-100 rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="slick-slide-item">
                                        <img src="../../assets/images/products/5.jpg" className="w-100 rounded"
                                             alt="image"/>
                                    </div>
                                </div>
                                <div className="slick-nav-wrapper">
                                    <div className="slider-nav">
                                        <div className="slick-slide-item m-2">
                                            <img src="../../assets/images/products/2.jpg" className="w-100 rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slick-slide-item m-2">
                                            <img src="../../assets/images/products/1.jpg" className="w-100 rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slick-slide-item m-2">
                                            <img src="../../assets/images/products/3.jpg" className="w-100 rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slick-slide-item m-2">
                                            <img src="../../assets/images/products/4.jpg" className="w-100 rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slick-slide-item m-2">
                                            <img src="../../assets/images/products/5.jpg" className="w-100 rounded"
                                                 alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                                <div>
                                    <div className="small text-muted mb-2">Technology Products</div>
                                    <h2>Ultimate Ears Wonderboom</h2>
                                    <p>
                                        <span className="badge bg-success">In stock</span>
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
                                        autem eaque error explicabo fugiat iusto necessitatibus, temporibus. Laudantium,
                                        voluptate?</p>
                                    <div className="d-flex gap-3 mb-3 align-items-center">
                                        <h4 className="text-muted mb-0">
                                            <del>$699,99</del>
                                        </h4>
                                        <h4 className="mb-0">$499,90</h4>
                                    </div>
                                    <div className="d-flex gap-2 mb-3">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-muted"></i>
                                        <span>(3)</span>
                                    </div>
                                    <p>Features:</p>
                                    <p>It is a long established fact that a reader will be distracted.
                                        Contrary to popular belief, Lorem Ipsum is not text.
                                        There are many variations of passages of Lorem.</p>
                                    <form className="mt-4">
                                        <div className="row row-cols-lg-auto">
                                            <div className="col-12">
                                                <div className="input-group">
                                                    <input type="number" className="form-control" defaultValue="1"/>
                                                    <button className="btn btn-primary" type="button">Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <a href="#" className="btn btn-icon flex-shrink-0">
                                    <i className="bi bi-heart-fill text-danger"></i> 50
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab"
                               aria-controls="description" aria-selected="true">Descriptions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab"
                               aria-controls="reviews" aria-selected="false">Reviews (3)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="sss-tab" data-bs-toggle="tab" href="#sss" role="tab"
                               aria-controls="sss" aria-selected="false">SSS</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="description" role="tabpanel"
                             aria-labelledby="description-tab">
                            <p className="font-weight-bold">Where was he raised?</p>
                            <p>Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris
                                feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla.
                                Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum
                                primis in
                                faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus
                                mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus
                                consectetur.
                                Maecenas facilisis eros ac felis mattis, egetauctor sapien varius.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores
                                dolorum
                                earum fugiat nostrum obcaecati, quis ratione rerum sapiente soluta!</p>
                            <p className="font-weight-bold">Chemicals in</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
                                reiciendis!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi, aperiam
                                corporis, dolorum fugiat fugit maxime nisi optio quo similique sit sunt tempora.
                                Commodi culpa debitis deleniti dolore maiores, maxime praesentium. Autem dicta
                                dolore ipsum molestiae quae, quasi soluta tempora.</p>
                        </div>
                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="mb-5">
                                        <div className="display-6">4.0</div>
                                        <div className="d-flex gap-2 my-3">
                                            <i className="bi bi-star-fill icon-lg text-warning"></i>
                                            <i className="bi bi-star-fill icon-lg text-warning"></i>
                                            <i className="bi bi-star-fill icon-lg text-warning"></i>
                                            <i className="bi bi-star-fill icon-lg text-warning"></i>
                                            <i className="bi bi-star-fill icon-lg text-muted"></i>
                                            <span>(3)</span>
                                        </div>
                                    </div>
                                    <div className="list-group list-group-flush mb-4">
                                        <div className="list-group-item d-flex px-0">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-text bg-purple rounded-circle">R</span>
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Rodger Stutely</h5>
                                                <div className="d-flex gap-2 mb-3">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-muted"></i>
                                                </div>
                                                <div>I love your products. It is very easy and fun to use this panel. I would
                                                    recommend it
                                                    to
                                                    everyone.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item d-flex px-0">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <span className="avatar-text bg-orange rounded-circle">C</span>
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Corly Hailston</h5>
                                                <div className="d-flex gap-2 mb-3">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <div>I love your products. It is very easy and fun to use this panel. I would
                                                    recommend it
                                                    to
                                                    everyone.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item d-flex px-0">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <img src="../../assets/images/user/man_avatar2.jpg" className="rounded-circle" alt="image"/>
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Hurleigh Smallcomb</h5>
                                                <div className="d-flex gap-2 mb-3">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <div>I love your products. It is very easy and fun to use this panel. I would
                                                    recommend it
                                                    to
                                                    everyone.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Comment:</label>
                                            <textarea rows="3" className="form-control" placeholder="Your opinion on the product"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Rate:</label>
                                            <div className="d-flex align-items-center">
                                                <div className="rating-example"></div>
                                                <div className="live-rating ms-3"></div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary mt-3" type="button" id="button-addon2">Send Review</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="sss" role="tabpanel" aria-labelledby="sss-tab">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            How are the delivery processes carried out?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged. It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            Is there a payment option at the door?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged. It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            How many can I order at the same time?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged. It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
