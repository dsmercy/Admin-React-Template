import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "../common/constants";

export default function AddProduct() {

    const ReactEditorJS = createReactEditorJS();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    useEffect(() => {
        console.log('errors', errors);
        // console.log('register',register);
    }, [errors])



    return (
        <>
            <form className="row g-3 needs-validation" onSubmit={handleSubmit((data) => console.log('data', data))}>
                <div className="col-md-6 position-relative">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('Name', { required: 'required msg' })} />
                    {errors.Name && <div className="text-danger">
                        This field is required
                    </div>}
                </div>
                <div className="col-md-6 position-relative">
                    <label htmlFor="Price" className="form-label">Price/kg</label>
                    <input type="number" className="form-control" {...register('Price', {
                        validate: {
                            positiveNumber: (value) => parseFloat(value) > 0,
                            lessThanHundred: (value) => parseFloat(value) <= 100,
                        }
                    })} />
                    {errors.Price && errors.Price.type === 'positiveNumber' && <div className="text-danger">
                        This field is required
                    </div>}
                    {errors.Price && errors.Price.type === 'lessThanHundred' && <div className="text-danger">
                        Length should be less than equal to 100
                    </div>}
                </div>
                <div className="col-md-6 position-relative">
                    <label htmlFor="Brand" className="form-label">Brand</label>
                    <input type="text" className="form-control" {...register('Brand', { required: true })} />
                    {errors.Brand && <div className="text-danger">
                        This field is required
                    </div>}
                </div>
                <div className="col-md-6 position-relative">
                    <label htmlFor="Type" className="form-label">Type</label>
                    <select className="form-select" {...register('Type', { required: true })}>
                        <option value="">--Select Type--</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>
                    {errors.Type && <div className="text-danger">
                        This field is required
                    </div>}
                </div>
                <div className="col-md-10 position-relative">
                    {/* <ReactEditorJS {...register('Description', { required: true })}
                        tools={EDITOR_JS_TOOLS} className="form-control"
                        defaultValue=""
                    /> */}
                    <ReactEditorJS tools={EDITOR_JS_TOOLS} defaultValue="" className="form-control" {...register('Description', { required: true })}/>
                    {errors.Description && <div className="text-danger">
                        This field is required
                    </div>}
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </>
    )
}
