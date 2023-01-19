import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function AddProduct() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue ,
        clearErrors,
        setError
    } = useForm({
        mode: 'onChange',
    });

    useEffect(() => {
        console.log('errors', errors);
    }, [errors])



    return (
        <>
            <form className="row g-3 needs-validation" onSubmit={handleSubmit((data) => console.log('data', data))}>
                <div className="col-md-6 position-relative">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('Name', { required: 'required msg' })}  defaultValue="test data"/>
                    {errors.Name && <div className="text-danger">
                        This field is required
                    </div>}
                </div>
                <div className="col-md-6 position-relative">
                    <label htmlFor="Price" className="form-label">Price/kg</label>
                    <input type="number" className="form-control"
                    defaultValue="90"
                    {...register('Price', {
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
                    <input type="text" className="form-control" 
                    defaultValue="test data"
                    {...register('Brand', { required: true })} />
                    {errors.Brand && <div className="text-danger">
                        This field is required
                    </div>}
                </div>
                <div className="col-md-6 position-relative">
                    <label htmlFor="Quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" 
                    defaultValue="10"
                    {...register('Quantity', { required: true })} />
                    {errors.Quantity && <div className="text-danger">
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
                <CKEditor
                    editor={ ClassicEditor } {...register('Description', { required: true })}
                    data=""
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setValue("Description", data);
                        if(data){
                            clearErrors('Description');
                        }else{
                            setError('Description');
                        }
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
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
